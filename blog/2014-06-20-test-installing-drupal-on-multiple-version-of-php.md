---
title: "Test installing drupal on multiple version of php"
date: "2014-06-20"
---

1. vim ~/.phpenv/versions/5.3.28/etc/php.ini pdo_mysql.default_socket="/var/run/mysqld/mysqld.sock"
2. mv ~/.drush/php.ini ~/.drush/php.ini_bak
3. cp ~/.phpenv/versions/5.3.28/etc/php.ini ~/.drush/
4. php -m | grep intl
  * Download php5-intl_5.3.10-1ubuntu3_i386.deb
  * extract
  * Copy intl.so to ~/.phpenv/versions/5.3.28/lib/php/extensions/no-debug-non-zts-20090626/
  * Add this line to the end of ~/.phpenv/versions/5.3.28/etc/php.ini
```
extension=intl.so
```
5. php -m | grep mcrypt
  * Download php5-mcrypt_5.3.2-0ubuntu1_i386.deb
  * extract
  * Copy mcrypt.so to ~/.phpenv/versions/5.3.28/lib/php/extensions/no-debug-non-zts-20090626/
  * Add these lines to the end of ~/.phpenv/versions/5.3.28/etc/php.ini
```
[mcrypt]
extension=mcrypt.so
```
6. Download libicu48_4.8.1.1-3ubuntu0.1_i386.deb and install it
