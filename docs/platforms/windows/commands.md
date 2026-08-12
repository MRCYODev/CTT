---
sidebar_position: 1
---

import PlatformBadges from '@site/src/components/PlatformBadges';

# Windows Commands

:::note
**Many of the commands applies to:** Windows 8.1, Windows 8.1 Enterprise Windows, 8.1 Pro Windows, 8 Windows, 8 Enterprise Windows, 8 Pro Windows, 7 Enterprise Windows, 7 Home Basic Windows, 7 Home Premium Windows, 7 Professional Windows, 7 Starter Windows, 7 Ultimate Windows Vista Enterprise 64-bit Edition, Windows Vista Ultimate 64-bit Edition, Windows Vista Business, Windows Vista Business 64-bit Edition, Windows Vista Enterprise, Windows Vista Ultimate, Windows 10, Windows 11.
:::



## Disk and file-system issues

```
chkdsk /f
```
:::tip
Why do we use /f parameter, we use it because we want to start the proccess of scanning, to find corrupted files.
:::
Description: Checks the file system and file system metadata of a volume for logical and physical errors. If used without parameters, chkdsk displays only the status of the volume and doesn't fix any errors. If used with the **/f, /r, /x,** or **/b** parameters, it fixes errors on the volume.

![Windows servicing mount diagram](https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/images/servicing_mount.png)

---

:::warning
SFC scans protected Windows system files and attempts to repair corrupted files.
:::

```
sfc /scannow
```
:::tip
Why do we use /scannow parameter, we use it because we want to start the proccess of scanning, to find corrupted files.
:::

:::note
Description: System File Checker, aka sfc, It scans and verifies the integrity of all protected system files and replaces incorrect versions with correct versions. If this command discovers that a protected file has been overwritten, it retrieves the correct version of the file from the ***`systemroot\`*** folder, and then replaces the incorrect file.
:::

```
diskpart
```

<details>
<summary>Details</summary>

The specific command allows you to manage the computer's drives such as (disks, partitions, volumes, and virtual hard disks).

Although for any of the following commands to work you'll need to first give an object focus (meaning that any commands you enter will work only on the focused object).

However some commands change the focus automatically (like creating a new partition).

</details>

```
DISM /Online /Cleanup-Image /RestoreHealth
```

<details>
<summary>Details</summary>


This command is mostly used to check the integrity of the windows system image (the files that make up the windows OS, like the system DLLs and components in WinSxS).

What it does: It checks and searches for any corrupted or missing system files, it repairs them or replaces them by using clean copies from Windows Update or from a local source. 

The command will not touch anything installed or not unless it belongs to a core Windows component (like microsoft edge coming back after it is used)
it will not actually reset your OS and just try to repair itself.

If you want to try and repair just use:

**DISM /Online /Cleanup-Image /ScanHealth**

If you just want to check without repairing use:

**DISM /Online /Cleanup-Image /CheckHealth**


</details>

## Network and connectivity issues

```
ipconfig
```

---

```
netsh winsock reset
```

<details>
<summary>Details</summary>

This command restores the Winsock catalog back to its default clean state. It fixes internet connection failures caused by corrupted network settings, bad malware removal or leftover and persistent data from removed VPNs and firewalls.

</details>


```
netsh int ip reset
```
<details>
<summary>Details</summary>

This command is as simply as it just tries to reset the TCP/IP in case you have any connection issues

</details>

```
ping
```

```
nslookup
```

```
hostname
```

```
tracert /?
```

```
arp /?
```

```
systeminfo
```

```
netstat
```
