---
title: "Cài đặt yEd, Virtualbox trong linux"
date: "2012-08-19"
---

Trong linux thì cách cài 2 thằng này khá giống nhau.

1. bạn nên download file sh của nó từ trang chủ.

[https://www.virtualbox.org/wiki/Linux_Downloads](https://www.virtualbox.org/wiki/Linux_Downloads)

[http://www.yworks.com/en/products_yed_download.html](http://www.yworks.com/en/products_yed_download.html)

2. tạo 1 file install.sh đặt chung thư mục với file sh mới download về, nội dung file:

```
#!/bin/sh

cp yEd\*.sh ~ sudo sh ~/yEd\*.sh rm ~/yEd\*.sh
```

thay yEd bằng Virtualbox cho file install của virtualbox.

các bạn chú ý có sử dụng \* ở trong file install.sh này. Đó là wildcard, rất mạnh khi dùng trong file bash.

3. đơn giản là:

```
sudo sh install.sh
```

thôi:D
