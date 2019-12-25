---
title: "Fix netbeans do not index drupal's files"
date: "2015-07-11"
---

When you open a drupal project using netbeans > 7.2.1, netbeans won't index files, so we can not go to functions or refactor code.

[Here](https://www.drupal.org/node/1019816) is the way to set up netbeans so that it can recognize drupal's files.

Then you have to delete netbeans's cache, so that it can re-index drupal project:

```
rm -rf ~/.cache/netbeans/8.0.2
```
