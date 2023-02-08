---
title: "Fix Waiting For Connection (netbeans-xdebug) in Netbeans"
authors: tienvx
date: "2014-04-14"
---

1. This is the old and buggy xdebug config:
```
[Xdebug]
;zend_extension=/usr/lib/php5/20121212/xdebug.so
;xdebug.remote_host=127.0.0.1
xdebug.remote_connect_back=1
xdebug.remote_enable=1
xdebug.remote_autostart = 1
xdebug.remote_handler="dbgp"
xdebug.remote_port=9000
xdebug.profiler_enable=0
xdebug.profiler_enable_trigger = 1
```
2. This is new and stable xdebug config:
```
[xdebug]
;zend_extension=/usr/lib/php5/20121212/xdebug.so
xdebug.remote_host=127.0.0.1
xdebug.remote_enable=1
xdebug.remote_autostart = 1
xdebug.default_enable = 1
xdebug.remote_handler=dbgp
xdebug.remote_port=9000
xdebug.idekey="netbeans-xdebug"
xdebug.profiler_enable=1
xdebug.profiler_enable_trigger = 1
```
3. sudo vim /etc/php5/apache2/php.ini
4. Change to new config
5. sudo vim /etc/php5/cli/php.ini
6. Change to new config
7. sudo service apache2 restart
8. Disable 'Watches and Balloon Evaluation' in netbeans
9. Restart netbeans
