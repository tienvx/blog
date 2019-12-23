---
title: "Hello World trong Zend Framework 2"
date: "2012-08-19"
---

Tài liệu tốt nhất về zend framework 2 hiện tại là trang web của tác giả Rob Allen, tác giả của quyển Zend Framework in Action (và đang có kế hoạch cho Zend Framework 2 in Action, khi nào có tiền để dành mua mới được) [http://akrabat.com/](http://akrabat.com/).

1. đầu tiên bạn phải tải skeleton về.

[https://github.com/zendframework/ZendSkeletonApplication](https://github.com/zendframework/ZendSkeletonApplication)

sau đó update

php composer.phar self-update

cuối cùng là tải library của zf2 về cho skeleton chạy. bạn nên đặt timeout cho lớn vào, nếu không sẽ xuất hiện exception.

COMPOSER\_PROCESS\_TIMEOUT=4000 php composer.phar install

2\. trong XAMPP 1.8 mình thấy có vấn đề về virtual host, cụ thể là gõ http://skeleton.localhost thì sẽ chuyển thành http://skeleton.localhost/xampp/, nên tốt nhất là không nên xài virtual host vào lúc này, đợi khi nào tìm cách fix đã.

3\. Bạn chạy http://localhost/skeleton thì sẽ ra giao diện khá đẹp của ZF2
