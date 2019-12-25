---
title: "Install Zero MQ on Ubuntu"
date: "2014-07-16"
---

1. sudo apt-get install libzmq3
2. sudo apt-get install libzmq3-dev
3. wget https://github.com/mkoppanen/php-zmq/archive/1.1.2.tar.gz
4. tar xfvz 1.1.2.tar.gz
5. cd php-zmq-1.1.2/
6. phpize && ./configure
7. make
8. sudo make install
9. sudo vim /etc/php5/apache2/php.ini  
    sudo vim /etc/php5/cli/php.ini  
    \[zmq\]
    extension=zmq.so
