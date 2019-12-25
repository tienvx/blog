---
title: "Install bumblebee on Ubuntu 16.10"
date: "2016-10-31"
---

The same as my [last post](https://tienxuanvo.wordpress.com/2016/10/30/install-bumblebee-ubuntu-16-04-1/), but we need to install bumblebee from testing ppa manually, because there are no packages for yakkety yet.

```
mkdir bumblebee-testing
cd bumblebee-testing
wget https://launchpad.net/~bumblebee/+archive/ubuntu/testing/+files/bumblebee-nvidia_3.2.1-96~xenialppa1_amd64.deb
wget https://launchpad.net/~bumblebee/+archive/ubuntu/testing/+files/bumblebee_3.2.1-96~xenialppa1_amd64.deb
sudo dpkg -i *.deb
```

And bumblebee can work fine with steam's games now, no need to update libstdc++ library inside steam folder.
