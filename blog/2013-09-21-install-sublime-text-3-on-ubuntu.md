---
title: "Install Sublime Text 3 on Ubuntu"
authors: tienvx
date: "2013-09-21"
---

1. Install dev build: http://www.sublimetext.com/3dev
2. cd ~/.config/sublime-text-3/Packages
3. git clone git://github.com/wbond/sublime_package_control.git Package\\ Control
4. git clone https://github.com/martomo/SublimeTextXdebug.git "Xdebug Client"
5. git clone -b BH2ST3 git://github.com/facelessuser/BracketHighlighter.git "BracketHighlighter"
6. git clone https://github.com/spadgos/sublime-jsdocs
7. git clone -b st3 git://github.com/titoBouzout/SideBarEnhancements.git "SideBarEnhancements"
8. git clone https://github.com/sergeche/emmet-sublime.git Emmet
9. git clone https://github.com/bgreenlee/sublime-github
10. wget https://github.com/SublimeCodeIntel/SublimeCodeIntel/archive/v2.0.6+st3.tar.gz tar xfvz v2.0.6+st3.tar.gz -C ./ mv SublimeCodeIntel-2.0.6-st3 SublimeCodeIntel
11. git clone https://github.com/dzhibas/SublimePrettyJson.git
12. git clone https://github.com/srusskih/SublimeJEDI.git SublimeJEDI
13. git clone https://github.com/akalongman/sublimetext-codeformatter
14.
```
sudo pear install PHP_Beautifier-0.1.15 --alldeps
sudo vim /usr/bin/php_beautifier
# line 52
# error_reporting(E_ALL & ~E_STRICT & ~E_DEPRECATED);
```

Refs: http://www.henriquebarroso.com/my-top-10sublime-2-plugins/
