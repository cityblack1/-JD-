from django.db import models
from django.contrib.auth.models import AbstractUser
# from django.conf import global_settings 用于查看可以覆盖的django默认设置


# Create your models here.
# 继承django自带的USER抽象类, 拓展原本的字段
class UserProfile(AbstractUser):
    nick_name = models.CharField(max_length=10, verbose_name='昵称')
    mobile = models.CharField(verbose_name='手机', max_length=11)

    class Meta:
        verbose_name = '用户资料'
        verbose_name_plural = verbose_name

    # 方便终端用户进行查看
    def __str__(self):
        return self.username
