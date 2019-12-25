---
title: "Install multiple version of php"
date: "2014-06-20"
---

```
cd ~
git clone git://github.com/phpenv/phpenv.git .phpenv
echo 'export PATH="$HOME/.phpenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(phpenv init -)"' >> ~/.bash_profile
exec $SHELL phpenv rehash
```

```
sudo apt-get install libxml2-dev
sudo apt-get install libcurl4-gnutls-dev
sudo apt-get install libmcrypt4 libmcrypt-dev
sudo apt-get install libreadline-dev
sudo apt-get install libtidy-dev
sudo apt-get install libxslt1-dev
sudo php-build -i development 5.3.28 $HOME/.phpenv/versions/5.3.28
```

```
phpenv versions
phpenv rehash
phpenv global 5.4.9
php --version
phpenv global system
php --version
```

```
extension dir: /home/tien/.phpenv/versions/5.3.28/lib/php/extensions/no-debug-non-zts-20090626/
config dir: /home/tien/.phpenv/versions/5.3.28/etc/php.ini
```

Ubuntu 14.04 system: 5.5.9...

Ref:
* https://github.com/CHH/phpenv
* https://github.com/chh/php-build
