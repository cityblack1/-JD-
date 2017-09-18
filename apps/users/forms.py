import re

from django import forms
from captcha.fields import CaptchaField


class LoginForm(forms.Form):
    username = forms.CharField(max_length=100, min_length=5)
    password = forms.CharField(min_length=5)

    def first_error(self):
        for key, error in self.errors.items():
            return error


class RegisterForm(forms.Form):
    username = forms.CharField(max_length=100, min_length=5)
    password = forms.CharField(min_length=5)
    password2 = forms.CharField(min_length=5)
    email = forms.EmailField(max_length=50)
    captcha = CaptchaField(error_messages={'invalid': '验证码错误'})
    mobile = forms.CharField(max_length=11)

    def clean_mobile(self):
        mobile = self.cleaned_data['mobile']
        REGEX_MOBILE = '^1[358]\d{9}$|^147\d{8}$|^176\d{8}$'
        p = re.compile(REGEX_MOBILE)
        if p.match(str(mobile)):
            return mobile
        raise forms.ValidationError(u'手机号码非法', code="mobile isn't valid")

    def clean_password2(self):
        password = self.cleaned_data['password']
        password2 = self.cleaned_data['password2']
        if password == password2:
            return password
        raise forms.ValidationError('两次密码不同', code="different password")



