---
title: "Fix Waiting For Connection (netbeans-xdebug) in Netbeans"
date: "2014-04-14"
---

1. This is the old and buggy xdebug config: \[Xdebug\] ;zend\_extension=/usr/lib/php5/20121212/[xdebug.so](http://xdebug.so) ;xdebug.remote\_host=127.0.0.1 xdebug.remote\_connect\_back=1 xdebug.remote\_enable=1 xdebug.remote\_autostart = 1 xdebug.remote\_handler="dbgp" xdebug.remote\_port=9000 xdebug.profiler\_enable=0 xdebug.profiler\_enable\_trigger = 1
2. This is new and stable xdebug config: \[xdebug\] ;zend\_extension=/usr/lib/php5/20121212/[xdebug.so](http://xdebug.so) xdebug.remote\_host=127.0.0.1 xdebug.remote\_enable=1 xdebug.remote\_autostart = 1 xdebug.default\_enable = 1 xdebug.remote\_handler=dbgp xdebug.remote\_port=9000 xdebug.idekey="netbeans-xdebug" xdebug.profiler\_enable=1 xdebug.profiler\_enable\_trigger = 1
3. sudo vim /etc/php5/apache2/php.ini
4. Change to new config
5. sudo vim /etc/php5/cli/php.ini
6. Change to new config
7. sudo service apache2 restart
8. Disable 'Watches and Balloon Evaluation' in netbeans
9. Restart netbeans
