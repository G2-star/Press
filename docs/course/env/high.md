# 高端操作

## 调高系统配置
找到uwsgi文件
1. 进入容器目录
   ![step1](/course/env/high/img.png)
2. 进入/dist/目录找到uwsgi文件
   ![step1](/course/env/high/img_1.png)
3. 修改文件，根据服务器配置来，越高服务器占用越高
   ![step1](/course/env/high/img_2.png)
4. 重启容器

## 后端在海外，前端在国内
自己把反代后端地址127.0.0.1:8005改成后端实际ip地址就行了

## 数据库相关信息
之前教程里面说用公网ip，放行3306端口，只是为了省事快速部署，为了安全可以这样改成内网地址
终端输入：`ifconfg`
找到自己服务器的内网ipv4的ip地址，比如
![step1](/course/env/high/img_3.png)
然后把数据库权限添加这个ip地址
![step1](/course/env/high/img_4.png)
然后把.env数据库地址改成这个ip地址，用户名和密码不变，然后重启容器
