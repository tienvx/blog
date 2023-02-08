---
title: "PHP Profiler"
authors: tienvx
date: "2014-10-13"
---

1. sudo apt-get install python-setuptools
2. sudo easy_install xdebugtoolkit
3. sudo apt-get install graphviz
4. sudo apt-get install php5-xdebug
5. [xdebug] xdebug.profiler_enable=1 xdebug.profiler_enable_trigger=1 xdebug.profiler_output_dir=/tmp/xdebug
6. Add a trigger to a page you want to profiling http://example.com/file.php?XDEBUG_PROFILE=1
7. cg2dot /tmp/cachegrind.out.7340 | dot -Tpng -o ~/xdebug-all.png
