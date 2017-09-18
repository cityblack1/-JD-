from django.shortcuts import render
from django.views.generic.base import View

# 一个很恶心的bug, python3 不能用相对路径导入 model, 不然无法识别 app_label....
from projects.models import Category, Product


# Create your views here.
class IndexView(View):
    def get(self, request):
        return render(request, 'index.html', {})


class CategoryView(View):
    def get(self, request, category_id):
        all_cate_pros = Category.objects.filter(id=category_id)
        return render(request, 'search.html', {'search_result': all_cate_pros})


class DetailView(View):
    def get(self, request, product_id):
        # select_related 将提前缓存外键数据, 使得查询速度很快. 主要用于外键
        # product = Product.objects.select_related('category').get(id=product_id)
        # category = product.category
        # prefetch_related 方法类似于select_related, 不过它主要用来缓存 Manytomany 字段
        # 其实就是相当于把 quetyset 的外键或者多对多关系的对象提前缓存, 在使用它们的时候直接调用缓存结果
        # 因为实际是缓存, 所以不能链式查询两个不相干的结果....
        product = Product.objects.get(id=product_id)
        # 相关推荐
        cate_name = product.category.name
        rec_pros = Product.objects.filter(category__name__icontains=cate_name)

        if not product:
            return render(request, 'search.html', {'msg': '没有这个产品'})
        return render(request, 'details.html', {'product': product,
                                                'rec_pros': rec_pros,
                                                })