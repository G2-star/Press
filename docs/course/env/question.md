# 安装常见问题（有问题先来这）

## 没有流式返回（逐字回复）

点击这个conf

![https://cdn.nlark.com/yuque/0/2023/png/1328158/1677856583652-cb138e1f-c55f-40cd-b6f4-57d2059276a5.png](https://cdn.nlark.com/yuque/0/2023/png/1328158/1677856583652-cb138e1f-c55f-40cd-b6f4-57d2059276a5.png)

配置添加一行

proxy_buffering off;

![https://cdn.nlark.com/yuque/0/2023/png/1328158/1677856624742-8c594f1c-da5a-4a6d-96ee-0477618a9fe6.png](https://cdn.nlark.com/yuque/0/2023/png/1328158/1677856624742-8c594f1c-da5a-4a6d-96ee-0477618a9fe6.png)

## 反代之后还是返回404

![Untitled](/course/env/question/Untitled.png)

![Untitled](/course/env/question/Untitled1.png)

## 连接A星球超时啦，请多试一下哟
关于链接ai星球失败错误
官方限制免费key的速度，自己用120刀的key
或者
更新到最新版后端，在.env配置文件新增TIMEOUT=秒数
自己慢慢调，过长会导致数据库死锁

## 请求失败啦，该网站暂不支持gpt-3.5-turbo哦！
检查后台Key的设置

## Unauthorized

![Untitled](/course/env/question/Untitled2.png)

把.env里面的接口地址换成反代试一下，实在不行换apikey

## 卡密新建

参考

![Untitled](/course/env/question/Untitled3.png)

## 重启系统

每次修改.env配置文件，都需要重启

![Untitled](/course/env/question/Untitled4.png)

## 查看日志

### 1. docker logs ailink

### 2. 后台->系统管理
![Untitled](/course/env/question/img5.png)

## UnicodeEncodeError: 'latin-1' codec can't encode character '\uff0c' in position 58: ordinal not in range(256)
![Untitled](/course/env/question/Untitled8.png)

key用英文逗号分开

## 支付后，费用我是收到了，但是用户套餐没有发现变化

检查商品的类型，改为充值积分卡

![Untitled](/course/env/question/Untitled9.png)