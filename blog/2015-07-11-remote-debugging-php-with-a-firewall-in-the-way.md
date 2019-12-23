---
title: "Remote debugging PHP with a firewall in the way"
date: "2015-07-11"
---

If you unable to connect IDE to xdebug, probably there is a firewall between your IDE and xdebug. You can either [set up a tunnel](http://slides.com/tienvoxuan/xdebug-2015#/3/7) or disable your firewall. Here is how you can disable firewall in ubuntu:

`sudo ufw disable`

Reference:

http://derickrethans.nl/debugging-with-xdebug-and-firewalls.html
