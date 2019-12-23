---
title: "Episode 1: Make drupal server run"
date: "2013-05-03"
---

1\. Cài đặt virtualbox trên host. Ở đây mình dùng Ubuntu Desktop 13.04. Sau khi cài xong virtualbox, bạn vào File -> Preferences -> Network -> Add Host-only network. Bạn sẽ có một card mạng ảo trên host với dhcp đã được cấu hình sẵn với đường mạng 192.168.56.1/255.255.255.0.

2\. Cài guest. Ở đây mình dùng Ubuntu Server 13.04. Tạo mới một Virtual Machine với 1 card mạng eth0, Attached to Host-only adapter, Name là card mạng ảo bên host, một shared folder để chia sẻ dữ liệu giữa host và guest dễ hơn. Lúc cài bạn nên chọn ở màn hình cài phần mềm là OpenSSH server, LAMP server, Mail server. Sau khi reboot guest, bạn đăng nhập vào và gõ lệnh sudo nano /etc/network/interfaces và để card mạng eth0 ở chế độ automatic ip: auto eth0 iface eth0 inet dhcp chạy lệnh sudo /etc/init.d/networking restart để khởi động lại networking service sau khi thay đổi thông số ip. Từ host và guest bạn ping lẫn nhau để đảm bảo guest và host thông nhau.

3\. Để guest có thể vào internet được thì ta cần 2 card mạng ở guest. Card mạng eth0 ở chế độ NAT, card eth1 ở chế độ Host-only. Trong guest khi ta chạy lệnh ifconfig chỉ thấy card mạng eth0, nhưng vẫn ping được với host, và vào internet được.  Nhưng ở host ping guest (ping 192.168.56.101) không được, lý do là vì ta vì eth1 chưa có địa chỉ ip, ta cần edit lại /etc/network/interfaces (thêm vào eth1 có cấu hình như của eth0, tức là dhcp). Chú ý sau khi edit ta cần khởi động lại service networking (sudo /etc/init.d/networking restart). Để chắc chắn, ở guest chúng ta chạy lệnh ifconfig -a để xem cấu hình của tất cả các card mạng. nếu muốn xài ip tĩnh ở eth1 thì thêm những dòng: auto eth1 iface eth1 inet static address 192.168.56.104 network 192.168.56.0 broadcast 192.168.56.255 netmask 255.255.255.0 #                  gateway 192.168.56.1

4.  Cài VBoxGuestAdditionsbạn vào Click Devices / CD/DVD Devices / Choose a virtual CD/DVD disk file, chọn file VBoxGuestAdditions.iso có trong /usr/share/virtualbox/, sau đó chạy các lệnh sau: sudo apt-get install hwinfo sudo mount /dev/cdrom /media/cdrom cd /media/cdrom sudo ./VBoxLinuxAdditions.run sudo reboot

5\. Khi bạn chọn auto mount thư mục shared giữa host và guest, bạn sẽ thấy trong /media có thư mục sf\_Share, tuy nhiên nếu bạn dùng lệnh ls /media/sf\_Share thì bị báo lỗi permission. bạn phải chạy 2 lệnh sau: sudo usermod -aG vboxsf group\_cua\_username\_hien\_tai sudo usermod -aG vboxsf www-data

6\. Thực hiện các lệnh sau để install drupal lên server: wget  http://ftp.drupal.org/files/projects/drupal-7.22.tar.gz tar xfvz drupal-7.22.tar.gz sudo mv drupal-7.22/ /var/www/ cd /var/www/drupal-7.22 cp sites/default/default.settings.php sites/default/settings.php chmod a+w sites/default/settings.php chmod a+w sites/default

mysql -u root -p CREATE DATABASE drupal; CREATE USER druser@localhost; SET PASSWORD FOR druser@localhost= PASSWORD("drupass"); GRANT ALL PRIVILEGES ON drupal.\* TO druser@localhost IDENTIFIED BY 'drupass'; FLUSH PRIVILEGES; exit

sudo apt-get install php5-gd

7\. Đổi tên server thay vì ở host ta phải đánh địa chỉ 192.168.56.102 dài, ta có thể thay đổi tên thành server.com ngắn gọn hơn. Để làm điều này ở host (và ở guest nếu cần) ta thêm dòng 192.168.56.102 server.com vào /etc/hosts

8\. Cài đặt ở host ta nhập địa chỉ server.com/drupal-7.22 và bắt đầu cài đặt drupal. Chú ý database là drupal, user name mysql là druser, pass mysql là drupass. Khi cài các bạn nhớ user và pass của drupal (admin user của drupal) để đăng nhập lần sau :)

9\. SSH các bạn vào đây đọc, rất hay, quá đầy đủ cho một newbie (http://support.suso.com/supki/SSH\_Tutorial\_for\_Linux) có 2 lệnh chủ yếu là: ssh-keygen -t dsa và scp ~/.ssh/id\_dsa.pub username@arvo.suso.org:.ssh/authorized\_keys ssh-copy-id user@host
