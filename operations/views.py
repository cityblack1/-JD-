from django.shortcuts import render
from projects.models import Product
from django.db.models import Q


# Create your views here.
def search(request, search_field):
    # 将传递过来的关键词分词
    # 如需要追求精确的分词可以用第三方库 结巴分词
    search_list = search_field.split('_')

    # 随便写个小算法, 如果追求更精确的搜索方法可以使用开源的搜索引擎
    def filter2(z):
            """
            :param z: 一个包含search字段的列表
            :return: 一个 queryset对象
            """
            x = Product.objects.all()
            from copy import deepcopy
            a = []
            if z and x:
                b = z.pop(0)
                x.filter(Q(name__icontains=b) | Q(category__name__contains=b))
                a = deepcopy(x)
            return a
    search_result = filter2(search_list)

    # 商家精选
    shop_recommend = Product.objects.filter(name__icontains=search_list[0]).order_by('-purchase_times')[:5]
    return render(request, 'search.html', {'search_result': search_result,
                                           'shop_recommend': shop_recommend
                                           })