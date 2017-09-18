"""jd URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
import xadmin

from django.conf.urls import url, include
from django.contrib import admin
from apps.projects.views import IndexView
from apps.users import urls as user_urls
from users.views import ajax_val
from operations.views import search
from projects import urls as project_urls
from jd.settings import MEDIA_ROOT
from django.views.static import serve


urlpatterns = [
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^user/', include(user_urls, namespace='user')),
    # 商品
    url(r'^product/', include(project_urls, namespace='product')),

    url(r'^xadmin/', xadmin.site.urls),
    url(r'^admin/', admin.site.urls),
    # 验证码
    url(r'^captcha/', include('captcha.urls')),
    # 验证码动态验证
    url('^ajax_val/',ajax_val, name='ajax_val'),
    url('^search/(?P<search_field>\w{0,20})/$', search, name='search'),
    # 处理媒体文件图片
    url(r'^media/(?P<path>.*)$', serve, {'document_root': MEDIA_ROOT}),

]
