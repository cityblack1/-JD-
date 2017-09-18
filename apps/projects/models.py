from django.db import models


# Create your models here.
class Shop(models.Model):
    name = models.CharField(max_length=20, verbose_name='名称')

    class Meta:
        verbose_name = '卖家商店'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Support(models.Model):
    name = models.CharField(max_length=20, verbose_name='名称')
    describe = models.CharField(max_length=100, verbose_name='描述', default='')
    link = models.CharField(max_length=100, verbose_name='跳转链接', blank=True)
    add_time = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='添加日期')

    class Meta:
        verbose_name = '支持'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=20, verbose_name='名称')
    add_time = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='添加日期')

    class Meta:
        verbose_name = '所属类别'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Colors(models.Model):
    name = models.CharField(max_length=10, verbose_name='颜色')
    image = models.ImageField(upload_to='image/%Y/%m', verbose_name='文件', max_length=100)
    add_time = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='添加日期')

    class Meta:
        verbose_name = '颜色'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Promise(models.Model):
    name = models.CharField(max_length=10, verbose_name='名称')
    add_time = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='添加日期')

    class Meta:
        verbose_name = '保证'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Product(models.Model):
    shop = models.ForeignKey(Shop, verbose_name='卖家商店', null=True, blank=True)
    name = models.CharField(max_length=50, verbose_name='名称')
    ad = models.CharField(max_length=100, verbose_name='宣传语')
    price = models.FloatField(verbose_name='价格', default=0)
    support = models.ManyToManyField(Support, verbose_name='支持')
    category = models.ForeignKey(Category, verbose_name='类别')
    available_nums = models.IntegerField(default=0, verbose_name='库存数量')
    weight = models.FloatField(default=0, verbose_name='重量')
    color = models.ManyToManyField(Colors, verbose_name='颜色')
    detail = models.TextField(verbose_name='详情', default='')
    promise = models.ManyToManyField(Promise, verbose_name='增值保障')
    image = models.ImageField(upload_to='image/%Y/%m', verbose_name='文件', max_length=100, blank=True)
    purchase_times = models.IntegerField(default=0, verbose_name='销量')
    add_time = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='添加日期')

    class Meta:
        verbose_name = '商品'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class WhiteTip(models.Model):
    product = models.ForeignKey(Product, verbose_name='产品')
    name = models.CharField(max_length=30, verbose_name='名称')
    add_time = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='添加日期')

    class Meta:
        verbose_name = '白条'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


