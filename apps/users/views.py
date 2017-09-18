import json

from django.contrib.auth.hashers import make_password
from django.shortcuts import render
from django.views.generic.base import View
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from django.http.response import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.http import HttpResponse
from django.http import JsonResponse

from captcha.models import CaptchaStore

from .models import UserProfile
from .forms import LoginForm, RegisterForm


# 自定义一个后台的认证逻辑覆盖掉默认的authenticate接口
# 使用Q 来让其同时允许邮箱登录的模式
class MyBackend(object):
    def authenticate(self, username=None, password=None):
        try:
            user = UserProfile.objects.get(Q(username=username) | Q(email=username))
            # django的密码是哈希加密过的, 应当使用内置的check_password, 既安全又可靠
            if user.check_password(password):
                return user
            else:raise Exception
        except Exception as e:
            return None

    def get_user(self, user_id):
        try:
            return UserProfile.objects.get(pk=user_id)
        except UserProfile.DoesNotExist:
            return None


# ---------------------------------------------------------
# 定义 LOGIN 视图需要用到的全局变量
# 虽然前台会用ajax帮助我们实现一些异步操作, 但本项目不具备相应的JS代码
# 即便前台有JS逻辑, 后端依然应该定义自己的逻辑
# django表单登录后不应该render, 而应该反解重定向到新的视图, 可以防止用户刷新重复提交表单
MSG = None
ERROR_FORM = None
# 登录视图
# django1.8 废弃了反解路径的方式
# 利用root_urlconf中为include定义的namespace, eg:reverse('user:login')
# 也可以使用app_name来为urlconf指定一个名字
# 我们为了用户隐私, 不应当在url中显式传输重定向链接, 而django的redirect
# 和reverse不具备隐式传递数据的方式, 所以我们使用了全局变量, 简单高效的解决了问题
class LoginView(View):
    def get(self, request):
        global MSG, ERROR_FORM, MSG
        login_form = ERROR_FORM
        msg = MSG
        ERROR_FORM = None
        MSG = None
        return render(request, 'login.html', {'login_form': login_form, 'msg': msg})

    def post(self, request):
        login_form = LoginForm(request.POST)
        if login_form.is_valid():
            global ERROR_FORM, MSG
            username = login_form.cleaned_data['username']
            password = login_form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    login(request, user)
                    return HttpResponseRedirect('/')
                else:
                    ERROR_FORM = login_form
                    MSG = '用户未激活'
                    return HttpResponseRedirect(reverse('user:login'))
            else:
                ERROR_FORM = login_form
                MSG = '用户名或者密码错误'
                return HttpResponseRedirect(reverse('user:login'))
        else:
            ERROR_FORM = login_form
            return HttpResponseRedirect(reverse('user:login'))


# ------------------------------------------------
REGISTER_FORM = None
# 这个前端页面的作者写了详细的js代码,
# 后端可以配合前端ajax 异步进行一些功能(不用刷新页面), 没做全, 做了一点
# 之前那个login.html 的作者功力明显不够, 很多功能都没有实现, 都是靠后端安排....


class RegisterView(View):
    def get(self, request):
        username = request.GET.get('username', '')
        register_form = RegisterForm()
        # 核对前端js代码发送过来的用户名是否可用
        if username:
            user = UserProfile.objects.filter(username=username)
            if not user:
                a = dict()
                a['status'] = 'success'
                return HttpResponse(json.dumps(a), content_type="application/json")
            return HttpResponse(json.dumps({'status': 'fail'}), content_type="application/json")
        global REGISTER_FORM
        if REGISTER_FORM:
            register_form = REGISTER_FORM
            REGISTER_FORM = None
        return render(request, 'register.html', {'register_form': register_form})

    def post(self, request):
        global REGISTER_FORM
        register_form = RegisterForm(request.POST)
        if register_form.is_valid():
            # 虽然前端已经验证过username是否可用, 但后端还是要再次验证一遍
            # 因为有些用户的浏览器无法使用js, 或者恶意发送数据
            if UserProfile.objects.filter(Q(username=request.POST['username']) | Q(email=request.POST['email'])):
                global REGISTER_FORM
                REGISTER_FORM = register_form
                # 偷个懒, 后端懒得做那些提示了, 象征性的只做了手机和邮箱的
                return HttpResponse(json.dumps({'status': '用户名或邮箱已经存在'}), content_type="application/json")
            # 创建用户
            user_profile = UserProfile()
            user_profile.username = request.POST['username']
            user_profile.password = make_password(request.POST['password'])
            user_profile.email = request.POST['email']
            user_profile.mobile = int(request.POST['mobile'])
            user_profile.is_active = False
            user_profile.save()
            return HttpResponseRedirect(reverse('user:login'))
        else:
            REGISTER_FORM = register_form
            return HttpResponseRedirect(reverse('user:register'))


# 自定义ajax验证, CaptchaStore是验证码存储model
def ajax_val(request):
    # 验证验证码是否能使用
    if request.is_ajax():
        cs = CaptchaStore.objects.filter(response=request.GET['response'],
                                         hashkey=request.GET['hashkey'])
        if cs:
            json_data = {'status': 1}
        else:
            json_data = {'status': 0}
        return JsonResponse(json_data)
    else:
        # raise Http404
        json_data = {'status': 0}
        return JsonResponse(json_data)


class MyJDView(View):
    def get(self, request, user_id):
        return render(request, 'myJD.html', {})

