import xadmin
from projects.models import *


class SupportAdmin(object):
    pass


class CategoryAdmin(object):
    pass


class  ColorAdmin(object):
      pass


class  PromiseAdmin(object):
      pass


class  ProductAdmin(object):
      pass


class  WhiteTipAdmin(object):
    pass


class  ShopAdmin(object):
    pass


xadmin.site.register(Support, SupportAdmin)
xadmin.site.register(Category, CategoryAdmin)
xadmin.site.register(Colors, ColorAdmin)
xadmin.site.register(Promise, PromiseAdmin)
xadmin.site.register(Product, ProductAdmin)
xadmin.site.register(WhiteTip, WhiteTipAdmin)
xadmin.site.register(Shop, ShopAdmin)