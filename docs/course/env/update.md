# 系统更新教程

# 后端

## 进入终端

![Untitled](/course/env/update//Untitled.png)

## 执行指令

## `docker pull lanol/ailink:vip`

作用：获取新的镜像

## `docker stop ailink && docker rm ailink`

作用：停止并删除正在运行的

## **`docker run -d --restart=always -v /opt/AiLink/:/dist/data -p 8005:8005 --name ailink lanol/ailink:vip`**

作用：安装

## 迁移数据库

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
# 前端

后台->系统管理->系统更新，下载前端源码包，上传覆盖