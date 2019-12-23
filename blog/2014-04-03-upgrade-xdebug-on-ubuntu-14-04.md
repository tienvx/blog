---
title: "Upgrade xdebug on Ubuntu 14.04"
date: "2014-04-03"
---

xdebug 2.2.3 is very buggy on Ubuntu 14.04. We need to upgrade it. Here is how I done:

1. php -i > ~/phpinfo
2. Copy content of phpinfo and paste into http://xdebug.org/wizard.php
3. Follow those steps:
    1. Download [xdebug-2.3.3.tgz](http://xdebug.org/files/xdebug-2.3.3.tgz)
    2. tar -xvf xdebug-2.3.3.tgz
    3. cd xdebug-2.3.3/
    4. phpize && ./configure && make
    5. sudo cp modules/xdebug.so /usr/lib/php5/20131226/
