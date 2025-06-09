---
dg-publish: true
---

#mysql #docker
# docker基本使用

由于国内ban掉了docker hub，所以需要先修改docker的镜像源
基本的docker 命令：

>   run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Authenticate to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information

基本的使用： 
docker pull -> docker run [image] -args -> docker container (监控运行时的容器信息)

# 配置mysql在docker上运行的命令

## case:1基本命令

````bash
docker run --name some-mysql -p 13306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
````
- `--name some-mysql`：为容器指定一个名称，这里我们命名为`some-mysql`。
- `-p 13306:3306`：将容器的3306端口映射到宿主机的13306端口。
- `-e MYSQL_ROOT_PASSWORD=123456`：设置环境变量`MYSQL_ROOT_PASSWORD`为`123456`，这是root用户的密码。
- `-d`：以守护态（后台运行）运行容器。
- `mysql`：指定要运行的镜像名称。

## case:2持久化存储和自动重启

- 在docker运行时附加命令`docker exec my_container command_name --additional-arguments`

为了让MySQL的数据在宿主机上得以持久化，即使容器停运或删除，通过使用数据卷挂载来实现这一目标
```bash
docker run --name some-mysql -p 13306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /path/to/mysql/data:/var/lib/mysql -d mysql
```
这里 `-v /path/to/mysql/data:/var/lib/mysql` 表示将宿主机的 `/path/to/mysql/data` 目录挂载到容器的 `/var/lib/mysql` 目录，这是MySQL的默认数据存储位置。

## case:3设置远程访问权限

这里建议新建一个专门用于远程访问的用户控制访问权限，防止被勒索。
```sql
CREATE DATABASE "authorize";
CREATE USER 'verify_user'@'%' IDENTIFIED BY 'TempPass123!';  
GRANT SELECT ON authorize.* TO 'verify_user'@'%';  
FLUSH PRIVILEGES;
```
解释：
- 创建`verify_user`专门用于访问authorize数据库
- 通过`GRANT ...`赋予相关数据库权限

## 参考文献
[1.如何在Docker容器中配置MySQL并允许宿主机访问数据库](https://www.oryoy.com/news/ru-he-zai-docker-rong-qi-zhong-pei-zhi-mysql-bing-yun-xu-su-zhu-ji-fang-wen-shu-ju-ku.html)
[2.在MySQL中创建用户并赋予远程登录权限](https://www.jasonzk.com/tech/mysqlcreateuser/)
