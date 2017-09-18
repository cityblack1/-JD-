# _*_ coding: utf-8 _*_
# __author__ = 'syss'
# __date__ = '2017/4/30 0030 上午 11:15'
from MxOnline.settings import EMAIL_FROM
from random import choice
from users.models import EmailVerifyRecord
from django.core.mail import send_mail


def random_str(random_length=8):
    ran_str = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890'
    ran_num = ''
    for i in range(0, random_length):
        ran_cha = choice(ran_str)
        ran_num += ran_cha
    return ran_num


def send_register_email(email, send_type='register'):
    if send_type == 'update_email':
        code = random_str(4)
    else:
        code = random_str(16)

    email_record = EmailVerifyRecord()
    email_record.code = code
    email_record.email = email
    email_record.send_type = send_type
    email_record.save()

    email_title = ''
    email_body = ''

    if send_type == 'register':
        email_title = '幕学在线网注册激活链接'
        email_body = '请点击下边的链接激活你的账号: http://127.0.0.1:8000/active/'+code
        send_status = send_mail(email_title, email_body, EMAIL_FROM, [email])
        if send_status:
            pass
    elif send_type == 'forget':
        email_title = '幕学在线网密码重置'
        email_body = '请点击下边的链接重置你的账号: http://127.0.0.1:8000/reset/' + code
        send_status = send_mail(email_title, email_body, EMAIL_FROM, [email])
        if send_status:
            pass
    elif send_type == 'update_email':
        email_title = '幕学在线网修改邮箱验证'
        email_body = '您的激活码是' + code
        send_status = send_mail(email_title, email_body, EMAIL_FROM, [email])
        if send_status:
            pass
# 设置发送邮件的函数




