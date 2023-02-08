---
title: "Episode 3: Web server"
authors: tienvx
date: "2013-05-14"
---

ở đây có nói chi tiết về cách tạo web server cho aegir.http://community.aegirproject.org/node/396

0. Chỉnh lại ip của web.com thành 192.168.56.102
1. passwd aegir
2. apt-get install sudo
3. Cài debian7 chọn hostname là web, username và pass là webdev
4. cài phần mêm trên web server (như ở trên)
5. nên chọn bash thay cho sh vì bash tốt hơn nhiều (cụ thể là cho xem user hiện tại, directory hiện tại, host hiện tại và có thể auto complete.)
6. không nên chạy dòng này `ln -s /var/aegir/config/apache.conf /etc/apache2/conf.d/aegir.conf` nếu chạy rồi thì xóa /etc/apache2/conf.d/aegir.conf đi

7. dòng add key của debian.com nên thay bằng scp, thay
```
cat > /var/aegir/.ssh/authorized_keys <<EOF
ssh-rsa AAAAB3NzaC1yc2EAAAADAQAB...UF aegir@filer01
EOF
```
bằng
```
scp /var/aegir/.ssh/id_rsa.pub aegir@web.com:~/.ssh/authorized_keys
```
hay
```
ssh-copy-id aegir@web.com
```

8. nếu thấy lỗi `Could not rsync from '/var/aegir/...' to 'aegir@web.com:/` thì ở aegir.com ta đăng nhập vào aegir user, dùng lệnh ssh-copy-id aegir@web.com
9. ở web server không tạo được platforms
10. ln -s /var/aegir/config/apache.conf /etc/apache2/conf.d/aegir.conf service apache2 restart -Tim
11.
```
wget http://ftp.drupal.org/files/projects/drush-7.x-5.9.tar.gz
tar xfvz drush\*.tar.gz
ln -s drush/drush /usr/bin/drush
cd platforms/drupal7/sites/all/modules
drush/drush dl ...
cd platforms/drupal7/sites/examples.com
~/drush/drush en ... -y
```
12. nano /etc/apache2/httpd.conf ServerName localhost

nguồn:
* http://community.aegirproject.org/node/396
* http://community.aegirproject.org/node/30
* http://www.howtogeek.com/howto/ubuntu/installing-php5-and-apache-on-ubuntu/
