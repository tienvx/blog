---
title: "Ssl trong Symfony 2"
date: "2013-04-07"
---

1. Start server trong xampp

```
start xampp sudo /opt/lampp/lampp startssl

stop xampp sudo /opt/lampp/lampp stopssl
```

2. Trong Route symfony 2

```
....
prefix:   /admin
requirements: _
scheme:  https
```

3. Trong Virtual host

```
<VirtualHost 127.0.0.1:443>
  ServerAdmin admin@website.com
  DocumentRoot "/home/me/website/web"
  ServerName website.com
  ErrorLog "/home/me/website/error_log"
  CustomLog "/home/me/website/access_log" common
  <Directory "/home/me/website/web">
    Require all granted
  </Directory>
  SSLEngine on
  SSLCertificateFile "/opt/lampp/etc/ssl.crt/server.crt"
  SSLCertificateKeyFile "/opt/lampp/etc/ssl.key/server.key"
</VirtualHost>
```
