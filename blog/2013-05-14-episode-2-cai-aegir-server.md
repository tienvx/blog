---
title: "Episode 2: Cài Aegir server"
date: "2013-05-14"
---

1. Cài debian 6, lúc cài chọn root pass là root, thêm user name là aegir và password là aegir: adduser --system --group --home /var/aegir aegir passwd aegir usermod -a -G www-data aegir

2. Cài Aegir server. `a. wget http://files.aegir.cc/versions/BARRACUDA.sh.txt` b. sau khi tải về ta thay đổi thông số của file BARRACUDA.sh.txt \_MY\_OWNIP="192.168.56.101" \_MY\_HOSTN="aegir.com" \_MY\_FRONT="master.aegir.com" \_EASY\_HOSTNAME="debian.com" \_AUTOPILOT=YES \_MY\_EMAIL="webdev@aegir.com" \_DNS\_SETUP\_TEST=NO nếu có gặp lỗi dns thì `nano /root/.barracuda.cnf` \_DNS\_SETUP\_TEST=NO c. nano /etc/hosts 192.168.56.101   aegir.com 192.168.56.101   master.aegir.com d. nano /etc/network/interface auto eth1 iface eth1 inet static address 192.168.56.101 network 192.168.56.0 netmask 255.255.255.0 # gateway 192.168.56.1 3. bạn nên thêm vào file /etc/hosts 2 dòng ở client: 192.168.56.101 aegir.com 192.168.56.101 master.aegir.com để client có thể truy cập vào admin.aegir.com để thay đổi pass và thực hiện cấu hình. ps: để đăng nhập và đổi pass ta làm như sau: cd ~ cat install.log dòng cuối cùng có chứa thông tin đăng nhập 1 lần để thay mật khẩu. hay có thể cd vào ~/host\_master/001/sites/master.aegir drush uli để thay pass

3. Sau khi cài xong, aegir cho ta một đường dẫn để reset password (nếu lỡ mất thì ta dùng lệnh drush uli). ta truy cập vào đường dẫn này từ 1 browser, reset username và pass lại thành admin và admin

4. chsh -s /bin/bash aegir passwd aegir su aegir ssh-keygen nano /etc/hosts 192.168.56.102 web.com 192.168.56.103 database.com

5. thêm webserver và database server. ssh-copy-id aegir@web.com ssh-copy-id root@web.com (rsync) ssh-copy-id aegir@database.com

nguồn http://friendlydrupal.com/screencasts/installing-barracuda-aegir
