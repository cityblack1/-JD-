import os
import re
from bs4 import BeautifulSoup

DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'templates')
FILENAME1 = '234.html'
FILENAME2 = '' or FILENAME1

DIR2 = os.path.join(DIR, FILENAME1)
DIR3 = '' or DIR2

with open(DIR2, encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'lxml')
pattern = 'href=".*?"|src=".*?"|src=".*?"'
ori_str = re.findall(pattern, html)
ori_str = [x for x in ori_str if not (x.endswith('#"') or x.endswith('# "'))]

def sub_str(match):
    a = '"' + "{% static " + '"' + match.group(1) + '"' + " %}" + '"'
    return a

repr_str = [re.sub('"(.*?)"', sub_str, x) for x in ori_str]
# test2 = re.sub('"(.*?)"', sub_str, test)

for i in range(len(repr_str)):html = re.sub(ori_str[i], repr_str[i], html)

with open(DIR3, 'w', encoding='utf-8') as f:
    f.write(html)


a= 1

