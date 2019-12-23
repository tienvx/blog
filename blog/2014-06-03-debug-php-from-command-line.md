---
title: "Debug php from command line"
date: "2014-06-03"
---

1. Install, enable xdebug.
2. export XDEBUG\_CONFIG="idekey=netbeans-xdebug"
3. Set break point and run script.
4. If we run drush command (drupal), we (must?) update drush's php.ini  
    cp /etc/php5/apache2/php.ini ~/.drush/php.ini
