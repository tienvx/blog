---
title: "phpenv, drupalcs in fish shell"
authors: tienvx
date: "2014-12-29"
---

To add phpenv and other command to fish shell, run this command: vim ~/.config/fish/config.fish

```
set PATH $HOME/.phpenv/bin $PATH
set cmd phpenv init - eval $cmd

alias drupal8cs "$HOME/.composer/vendor/bin/phpcs --standard=$HOME/.composer/vendor/drupal/coder/coder_sniffer/Drupal --extensions='php,module,inc,install,test,profile,theme,js,css,info,txt'"

alias drupal8pr "$HOME/.composer/vendor/bin/phpcs --standard=$HOME/.composer/vendor/drupal/coder/coder_sniffer/DrupalPractice --extensions='php,module,inc,install,test,profile,theme,js,css,info,txt'"
```

To reload the configuration, run this command:

```
exec fish
```
