---
title: "Use fcitx in hipchat on ubuntu"
authors: tienvx
date: "2016-10-30"
---

In my company, we use Hipchat to communicate while we work.
But on my machine (Ubuntu 16.04.1) I can not type my native language (Vietnamese).
That is because I switch from ibus to fcitx (there are lot of [bug](http://www.nerdyweekly.com/posts/ibus-is-dead-to-me-use-fcitx-instead-vi/) in ibus these days), and unfortunately, Hipchat [only support ibus](https://jira.atlassian.com/browse/HCPUB-1702).

I used to use Hipchat [web](https://go1.hipchat.com/chat) as an alternative.
But recently I [find out](http://d.sunnyone.org/2014/09/linuxhipchatubuntu-qt5.html) I can make Hipchat work with fcitx, with a simple command:

```
sudo ln -s /usr/lib/x86_64-linux-gnu/qt5/plugins/platforminputcontexts/libfcitxplatforminputcontextplugin.so /opt/HipChat4/lib/plugins/platforminputcontexts
```

Hope this help some one.
