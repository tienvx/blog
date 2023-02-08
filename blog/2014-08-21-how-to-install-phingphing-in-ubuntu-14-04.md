---
title: "How to install phing/phing in ubuntu 14.04"
authors: tienvx
date: "2014-08-21"
---

1. Upgrade php5.5 [http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/](http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/)
2. sudo pear install channel://[pear.php.net/VersionControl_SVN-0.5.1](http://pear.php.net/VersionControl_SVN-0.5.1)
3. sudo pear install channel://[pear.php.net/VersionControl_Git-0.4.4](http://pear.php.net/VersionControl_Git-0.4.4)
4. sudo pear install channel://[pear.php.net/Services_Amazon_S3-0.4.0](http://pear.php.net/Services_Amazon_S3-0.4.0)
5. sudo pear install channel://[pear.php.net/XML_Serializer-0.20.2](http://pear.php.net/XML_Serializer-0.20.2)
6. sudo pear install pear/PHP_CodeSniffer
7. `sudo pear install --alldeps phing/phing`
