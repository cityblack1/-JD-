with open('login2016.js', encoding='gbk') as f:
    html = f.read()

with open('login2016.js', 'w', encoding='gbk') as f:
    f.write(html)

print('print('')')