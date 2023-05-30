# 后端安装教程

# 注意：这一步需要外网的Mysql才可进行

# 后端项目部署

## 1. 配置文件

在`/opt/AiLink` 目录下吗新建一个`.env` 文件（如果目录不存在就自己创建一下）

新建`AiLink` 目录，大小写不能错

![Untitled](/course/env/backend/Untitled.png)

进入目录，新建`.env`文件

![Untitled](/course/env/backend/Untitled1.png)

```swift
DEBUG=False
# Mysql 数据库
# 数据库名
DB_NAME=
# 数据库用户
DB_USER=
# 数据库密码
DB_PASSWORD=
# 数据库地址(需要公网IP)
DB_HOST=
# 数据库端口（需要宝塔防火墙，服务器面板放行）
DB_PORT=

# 超时时间
TIMEOUT=5

# 支付方式：0：不开通 1:支付宝当面付  3:易支付（需要支持APi调用支付） 4:源支付
PAY_STYLE=0
# 如果当面付，需要配置以下参数
# 支付宝当面付的APPID
ALIPAY_APP_ID=
# 支付宝当面付的私钥
ALIPAY_APP_PRIVATE_KEY=
# 支付宝当面付的公钥
ALIPAY_PUBLIC_KEY=

# 如果是彩虹易支付，需要配置以下参数（注意，需要支付平台支持API调用支付）
YI_PAY_URL=
YI_PAY_PID=
YI_PAY_KEY=

# 源支付（普通易支付）信息
YUAN_PAY_URL=https://pay.zitw.cn/
YUAN_PAY_PID=
YUAN_PAY_KEY=

# AUTH_DOMAIN很重要，请认真填写，否则会导致无法支付成功无法到账，无法退款
# 请填写你的域名，例如：https://ailink.pw/
# 需要https:// 和 最后的 / 请认真填写，缺一不可
AUTH_DOMAIN=https://ailink.pw/
# AUTH_KEY （发货时给你的key）
AUTH_KEY=

# 任务线程数
M_THREAD=3
```

根据个人情况修改后保存

![Untitled](/course/env/backend/Untitled2.png)

## 2. 一键安装后端

终端→填写服务器信息→登录→填写下面指令

```
docker run -d --restart=always -v /opt/AiLink/:/dist/data -p 8005:8005 --name ailink lanol/ailink:vip
```

![Untitled](/course/env/backend/Untitled3.png)

只要输出的最后一行是这种很长的字母，一般没问题

![Untitled](/course/env/backend/Untitled4.png)

## 3. 迁移数据库

Docker→终端
![Untitled](/course/env/backend/Untitled5.png)

这两句是迁移数据库结构，如果没有报错，就是成功了
```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```
⚠️：必须是/dist# 这个目录，如果不是，需要先执行 `docker exec -it ailink /bin/bash` 进入容器
![Untitled](/course/env/backend/Untitled6.png)
这里只要没有很长的报错信息都是可以的
## 4. 创建超级用户（管理商品卡密等）

```bash
python manage.py createsuperuser
```

然后输入用户名邮箱密码。

后台地址（仅支持ip，不支持反代）ip:8005/api/ailink/manage

![Untitled](/course/env/backend/Untitled7.png)