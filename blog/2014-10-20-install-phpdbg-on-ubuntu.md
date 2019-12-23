---
title: "Install phpdbg on ubuntu 14.04"
date: "2014-10-20"
---

1. Install phpenv
2. Download bison 2.7 and install it http://mirror.esc7.net/pub/Ubuntu/pool/main/b/bison/
3. cd ~/.phpenv cd libexec vim phpenv-install
4. Here is the most important part, we need to add more options to CONFIGURE\_OPTIONS CONFIGURE\_OPTIONS="........ --with-readline \\ --enable-phpdbg\\ .........................."
5. phpenv install php-5.6.2 At the time this post is published, the latest version of PHP is 5.6.2, you can change that.
6. cd /path/to/your/index.php phpenv local 5.6.2
7. Remember to restore configure options if you want to install other version of php via phpenv
