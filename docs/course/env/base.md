# 基础环境配置

## 1. 安装 MySQL（如果你有就不用看了）

### 搜索安装

软件商店搜索Mysql→安装（图片里面是错误的，需要5.7版本）

![Untitled](/course/env/base/base1.png)

等待安装完成

![Untitled](/course/env/base/base2.png)

### 创建数据库

数据库→添加数据库

![Untitled](/course/env/base/img.png)

这里就自己改一下数据库名和用户名就行了，访问权限改一下

![Untitled](/course/env/base/img_1.png)

❗️如果提示数据库密码错误，则点击页面上的root密码，自己重新设置一下（自己找）

数据库就创建好了，留作备用，记得宝塔防火墙和服务器安全组放行3306

![Untitled](/course/env/base/img_2.png)

比如我这里的数据库信息：

用户名：ailink

数据库：ailink

密码：MXGLMjyaAhAdrFY8

！！！ 还需要去宝塔安全放行3306端口

## 2. 安装Docker（如果你有就不用看了）

同上，搜索安装（版本最新的就行了）

![Untitled](/course/env/base/img_3.png)