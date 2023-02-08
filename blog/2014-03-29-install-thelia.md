---
title: "Install thelia"
authors: tienvx
date: "2014-03-29"
---


1. Get code git clone https://github.com/thelia/thelia.git
2. Change version of propel open composer.json update version of propel: "propel/propel": "2.0.0-alpha2",
3. Create a virtual host:
```
<VirtualHost \*:80>
  ServerName thelia.dev ServerAlias www.thelia.dev
  DocumentRoot /path/to/thelia/web
  <Directory /path/to/thelia/web> # enable the .htaccess rewrites
    AllowOverride All
    Require all granted
  </Directory>
  ErrorLog /path/to/thelia/error.log
  CustomLog /path/to/thelia/access.log combined
</VirtualHost>
```
4. Enable vhost alias
```
sudo a2enmod rewrite vhost_alias
```
5. Install dependencies
```
cd /path/to/thelia/
composer self-update
composer update
```
6. Fix permissions
```
chmod a+w -R /path/to/thelia/cache/
chmod a+w -R /path/to/thelia/log/
chmod a+w -R /path/to/thelia/local/config
chmod a+w -R /path/to/thelia/local/session
chmod a+w -R /path/to/thelia/local/media
```
7. Edit php.ini
```
sudo vim /etc/php5/apache2/php.ini
# /post_max_size
# post_max_size = 100M `extension=mcrypt.so`
```
8. Chown web/
```
sudo chown user:www-data -R web/
sudo chmod a+w -R web/
```
9. Create datable and import structure
```
create thelia database
import install/thelia.sql for database structure
import install/insert.sql for configurations
```
10. rm local/config/database.yml
11. go to thelia.dev and follow the instructions
12. Import realistic productions
```
php install/import.php
```
