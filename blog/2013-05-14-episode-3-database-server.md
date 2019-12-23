---
title: "Episode 4: Database server"
date: "2013-05-14"
---

1\. Cài debian 7 trong khi cài bạn chọn hostname là database có username là webdev và pass là webdev

2\. cài xong khởi động lại bạn cài phần mềm [mysql server](http://www.mysql.com "MySQL"): apt-get install mysql-server  php5-mysql trong lúc cài bạn chọn pass cho user root là root

3\. cấu hình a. cho phép remote access ở database đi vào command line của mysql _mysql -u root -p_ `` `GRANT ALL PRIVILEGES ON *.* TO aegir@aegir.com IDENTIFIED BY 'aegir' WITH GRANT OPTION;` FLUSH PRIVILEGES;`` b. edit file my.cnf _sudo cp /etc/mysql/my.cnf /etc/mysql/my.cnf.bak_ comment dòng _bind-address = 127.0.0.1_ _sudo /etc/init.d/mysql restart c. lúc tạo database server, bạn nhập vào username và pass là aegir (vì aegir từ aegir.com đã được full quyền trên database.com)_

tham khảo http://www.ghacks.net/2009/12/27/allow-remote-connections-to-your-mysql-server/
