---
title: "PHP Profiler"
date: "2014-10-13"
---

1. sudo apt-get install python-setuptools
2. sudo easy\_install xdebugtoolkit
3. sudo apt-get install graphviz
4. sudo apt-get install php5-xdebug
5. \[xdebug\] xdebug.profiler\_enable=1 xdebug.profiler\_enable\_trigger=1 xdebug.profiler\_output\_dir=/tmp/xdebug
6. Add a trigger to a page you want to profiling http://example.com/file.php?XDEBUG\_PROFILE=1
7. cg2dot /tmp/cachegrind.out.7340 | dot -Tpng -o ~/xdebug-all.png
