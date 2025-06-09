---
dg-publish: true
---


#docker #mysql #crontab #mysqldump
# 使用mysqldump进行备份

```bash
sudo docker exec -it mysql /bin/bash
#进入mysql容器
mysqldump -uroot -pYOUR_PASSWORD --all-databases/[YOUR_DATABASE] >  emp_`date +%F`.sql
#在容器中备份所有数据库，并以日期命名
exit
#退出容器
sudo docker cp mysql:BACKUP_FILE.SQL /var/backup/
#将容器中的备份文件，复制到本地备份文件夹中
```

# 容器中还原

```bash
#复制备份文件到容器中的var目录
sudo docker cp /var/backup/BACKUP_FILE.SQL mysql:/var
#进入容器
sudo docker exec -it mysql bin/bash
#进入mysql
mysql -uroot -p
#使用备份sql恢复数据库
source /var/backup/BACKUP_FILE.SQL

#或者不进入mysql直接容器中还原
mysql -uroot -pYOUR_PASSWORD < /var/backup/BACKUP_FILE.SQL

```

# 定时任务

```bash
#创建定时任务
crontab -e

#填入任务
0 2 * * * find /backup/ -mtime +1 -name "*.sql" -delete && sudo docker exec mysql sh -c 'exec mysqldump --all-databases/[DATABSE] -uroot -p123456 --all-databases/[DATABSE]' > /var/backup/BACKUP_FILE.SQL

```

## 参考文献
[1. MySQL mysqldump备份数据库及恢复数据库](https://www.cnblogs.com/cy0628/p/15027122.html)