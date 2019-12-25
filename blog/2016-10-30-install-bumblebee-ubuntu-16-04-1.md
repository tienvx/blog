---
title: "Install bumblebee Ubuntu 16.04.1"
date: "2016-10-30"
---

Update and install latest driver

```
sudo apt-add-repository ppa:graphics-drivers/ppa
sudo apt-get update && sudo apt-get dist-upgrade
sudo apt install nvidia-prime nvidia-370
```

Reboot Switch to intel card

```
sudo prime-select intel
```

Install bumblebee testing with primus

```
sudo add-apt-repository ppa:bumblebee/testing
sudo apt update
sudo apt-get install bumblebee bumblebee-nvidia primus nvidia-settings nvidia-370
```

Add kernel modules to load at boot time

```
sudo gedit /etc/modules i915 bbswitch
```

Blacklist nvidia

```
sudo gedit /etc/modprobe.d/bumblebee.conf # 370 blacklist nvidia-370 blacklist nvidia-370-updates blacklist nvidia-experimental-370
```

Configure bumblebee

```
sudo gedit /etc/bumblebee/bumblebee.conf nvidia-current -> nvidia-370 Driver=nvidia
```

Add user to bumblebee group, enable bumblebeed daemon service.

```
sudo gpasswd -a $USER bumblebee
sudo systemctl enable bumblebeed
```

Add boot flags (depend on each machine, my laptop is):

```
sudo gedit /etc/default/grub
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nouveau.modeset=0 acpi_osi=! acpi_osi=\"Windows 2009\" acpi_backlight=native idle=nomwait"
sudo update grub2
```

Reboot Check if bumblebee working

```
sudo apt-get install mesa-utils primusrun glxinfo | grep OpenGL lsmod | grep bbswitch
cat /proc/acpi/bbswitch
primusrun glxgears
cat /proc/acpi/bbswitch
```

There is a bug that prevent to run steam's games using bumblebee, here is how to fix:

```
sudo apt-get install lib32stdc++6
cd ~/.steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu
mv libstdc++.so.6 ~/backup/32
ln -fs /usr/lib32/libstdc++.so.6 libstdc++.so.6
cd ~/.steam/ubuntu12_32/steam-runtime/amd64/usr/lib/x86_64-linux-gnu
mv libstdc++.so.6 ~/backup/64
ln -fs /usr/lib32/libstdc++.so.6 libstdc++.so.6
```

Open games in steam: open steam -> libraries -> right click a game -> properties -> set launch options `primusrun %command%`

Useful commands:

```
lspci | egrep 'VGA|3D' lsmod | grep bbswitch dmesg | grep bbswitch dpkg -l | grep bumblebee
lsmod | grep nvidia
optirun -b none
/usr/bin/nvidia-settings -c :8
```

Sources:

- [How to install and configure bumblebee](http://www.webupd8.org/2016/08/how-to-install-and-configure-bumblebee.html)
- [Bumblebee on ubuntu 16.04](https://rajat-osgyan.blogspot.com/2016/04/how-to-install-latest-nvidia-drivers-on.html)
- [Bumblebee on ubuntu 16.04 revised](https://rajat-osgyan.blogspot.com/2016/07/bumblebee-on-ubuntu-1604-revised.html)
- [Bumblebee on Lenovo T440p Ubuntu 16.04](http://lenovolinux.blogspot.com/2016/05/bumblebee-on-lenovo-t440p-nvidia-gt.html)
