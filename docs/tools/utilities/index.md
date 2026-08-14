---
sidebar_position: 1
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import SourceBadge from '@site/src/components/SourceBadge';

# Utilities

A collection of useful utilities for system maintenance, troubleshooting, optimization, networking, storage management, file recovery, conversion, and everyday technician tasks.

## Disk

Tools for analyzing, cleaning, managing, and recovering data from storage devices.

### Disk Scan

Tools for analyzing disk usage and finding files, folders, and applications that are consuming storage space.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://diskanalyzer.com/" /> [WizTree](https://diskanalyzer.com/)</> | Quickly analyzes disk usage and shows which files and folders are using the most storage space. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://github.com/shundhammer/qdirstat" github="https://github.com/shundhammer/qdirstat" /> [QDirStat](https://github.com/shundhammer/qdirstat)</> | Graphical disk-usage analyzer that shows directory sizes with a tree view and treemap and provides cleanup actions. | <PlatformBadges items={['linux', 'freebsd', 'openbsd', 'netbsd']} /> |
| <><SourceBadge url="https://www.squirreldisk.com/" /> [SquirrelDisk](https://www.squirreldisk.com/)</> | Visual disk-space analyzer for identifying large files and folders. | <PlatformBadges items={['windows', 'linux', 'macos']} /> |
| <><SourceBadge url="https://windirstat.net/" github="https://github.com/windirstat/windirstat" /> [WinDirStat](https://windirstat.net/)</> | Disk usage statistics viewer and cleanup tool for Windows. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://apps.kde.org/filelight/" /> [Filelight](https://apps.kde.org/filelight/)</> | Visualizes disk usage with interactive charts so large files and folders are easy to find. | <PlatformBadges items={['linux']} /> |
| <><SourceBadge url="https://apps.gnome.org/Baobab/" /> [Disk Usage Analyzer](https://apps.gnome.org/Baobab/)</> | Scans folders and storage devices and provides graphical views of disk usage. | <PlatformBadges items={['linux']} /> |
| <><SourceBadge url="https://www.jam-software.com/treesize" /> [TreeSize](https://www.jam-software.com/treesize)</> | Analyzes and visualizes storage usage to help identify large files and folders. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://sdmse.darken.eu/" /> [SD Maid SE](https://sdmse.darken.eu/)</> | Android maintenance utility for analyzing and managing files and applications. | <PlatformBadges items={['android']} /> |

### Disk Cleaners

Tools for removing unnecessary files, application leftovers, caches, logs, and other storage clutter.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://www.bleachbit.org/" github="https://github.com/bleachbit/bleachbit" /> [BleachBit](https://www.bleachbit.org/)</> | Deletes unnecessary files such as caches, logs, temporary files, and other data. | <PlatformBadges items={['windows', 'linux']} /> |
| <><SourceBadge url="https://www.bcuninstaller.com/" github="https://github.com/Klocman/Bulk-Crap-Uninstaller" /> [Bulk Crap Uninstaller](https://www.bcuninstaller.com/)</> | Removes unwanted applications and helps clean up files left behind after uninstallations. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://samolego.github.io/Canta/" github="https://github.com/samolego/Canta" /> [Canta](https://samolego.github.io/Canta/)</> | Android debloating tool for removing unwanted applications through Shizuku. | <PlatformBadges items={['android']} /> |

### Disk Management

Tools for partitioning, formatting, copying, and managing storage devices and file systems.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://gparted.org/" github="https://github.com/GNOME/gparted" /> [GParted](https://gparted.org/)</> | Partition editor for creating, resizing, moving, copying, and managing partitions and file systems. | <PlatformBadges items={['linux', 'bootable']} /> |

### Disk Information

Tools for inspecting drive health, SMART information, capacity, interfaces, and storage performance.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| [CrystalDiskInfo](https://crystalmark.info/en/software/crystaldiskinfo/) | Monitors drive health and reports SMART information and other drive details. | <PlatformBadges items={['windows']} /> |
| [CrystalDiskMark](https://crystalmark.info/en/software/crystaldiskmark/) | Measures sequential and random read and write performance of storage devices. | <PlatformBadges items={['windows']} /> |

## Converters

File conversion utilities for converting documents, images, video, audio, and other file formats.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://file-converter.io/" github="https://github.com/Tichau/FileConverter" /> [File Converter](https://file-converter.io/)</> | Converts files between many common formats through a graphical interface. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://ffmpeg.org/" github="https://github.com/FFmpeg/FFmpeg" /> [FFmpeg](https://ffmpeg.org/)</> | Multimedia framework for decoding, encoding, transcoding, muxing, demuxing, streaming, filtering, and playing media. | <PlatformBadges items={['windows', 'linux', 'macos', 'freebsd', 'openbsd', 'netbsd']} /> |
| <><SourceBadge url="https://imagemagick.org/" github="https://github.com/ImageMagick/ImageMagick" /> [ImageMagick](https://imagemagick.org/)</> | Image processing toolkit for converting, resizing, editing, and manipulating images. | <PlatformBadges items={['windows', 'linux', 'macos', 'freebsd', 'openbsd', 'netbsd']} /> |
| <><SourceBadge url="https://vert.sh/" github="https://github.com/VERT-sh/vert" /> [Vert](https://vert.sh/)</> | Web-based file converter that can perform many conversions locally in the browser. | <PlatformBadges items={['web']} /> |
| <><SourceBadge url="https://p2r3.github.io/convert/" github="https://github.com/p2r3/convert" /> [Convert to it!](https://p2r3.github.io/convert/)</> | Web-based converter for converting files between many formats. | <PlatformBadges items={['web']} /> |
| <><SourceBadge url="https://www.aconvert.com/" /> [AConvert](https://www.aconvert.com/)</> | Online converter supporting documents, images, video, audio, archives, and other file types. | <PlatformBadges items={['web']} /> |
| <><SourceBadge url="https://cloudconvert.com/" /> [CloudConvert](https://cloudconvert.com/)</> | Online file conversion service supporting documents, images, audio, video, archives, and other formats. | <PlatformBadges items={['web']} /> |

## File Recovery Tools

Tools for recovering deleted files and accessing systems when normal operating-system recovery options are unavailable.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://www.ccleaner.com/recuva" /> [Recuva](https://www.ccleaner.com/recuva)</> | Recovers deleted files from Windows computers, removable media, memory cards, and other supported storage devices. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://www.cleverfiles.com/data-recovery-software.html" /> [Disk Drill](https://www.cleverfiles.com/data-recovery-software.html)</> | Recovers deleted or lost files from computers and removable storage media. | <PlatformBadges items={['windows', 'macos']} /> |
| [TestDisk / PhotoRec](https://www.cgsecurity.org/) | Open-source tools for partition recovery, file recovery, and recovering files from damaged or reformatted media. | <PlatformBadges items={['windows', 'linux', 'macos']} /> |
| <><SourceBadge url="https://medicatusb.com/" /> [MediCat USB](https://medicatusb.com/)</> | Bootable toolkit containing recovery, diagnostic, partitioning, backup, and troubleshooting utilities. | <PlatformBadges items={['bootable']} /> |
| <><SourceBadge url="https://www.hirensbootcd.org/" /> [Hiren’s BootCD PE](https://www.hirensbootcd.org/)</> | Bootable Windows PE environment containing tools for diagnostics, recovery, partitioning, backup, and system repair. | <PlatformBadges items={['windows', 'bootable']} /> |

## Create a Bootable USB

Tools for creating bootable USB drives used to install operating systems, run live environments, and perform system recovery.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://rufus.ie/" github="https://github.com/pbatard/rufus" /> [Rufus](https://rufus.ie/)</> | Utility for creating bootable USB drives from ISO images and other bootable disk images. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://etcher.balena.io/" github="https://github.com/balena-io/etcher" /> [balenaEtcher](https://etcher.balena.io/)</> | Utility for writing operating-system images to USB drives and removable storage. | <PlatformBadges items={['windows', 'linux', 'macos']} /> |
| <><SourceBadge url="https://www.ventoy.net/" github="https://github.com/ventoy/Ventoy" /> [Ventoy](https://www.ventoy.net/)</> | Creates a multiboot USB drive that can boot multiple ISO and disk-image files. | <PlatformBadges items={['windows', 'linux']} /> |
| <><SourceBadge url="https://apps.kde.org/isoimagewriter/" gitlab="https://invent.kde.org/utilities/isoimagewriter" /> [ISO Image Writer](https://apps.kde.org/isoimagewriter/)</> | Writes ISO images to USB drives and other removable storage to create bootable media. | <PlatformBadges items={['linux']} /> |
| <><SourceBadge url="https://man7.org/linux/man-pages/man1/dd.1.html" /> `dd`</> | Command-line utility for copying and converting raw data, commonly used to write disk images and create exact copies of storage devices. | <PlatformBadges items={['linux', 'macos', 'freebsd', 'openbsd', 'netbsd']} /> |
| <><SourceBadge url="https://www.raspberrypi.com/software/" /> [Raspberry Pi Imager](https://www.raspberrypi.com/software/)</> | Official Raspberry Pi imaging utility for writing operating-system images to SD cards and USB storage devices. | <PlatformBadges items={['windows', 'linux', 'macos']} /> |

## Remote Access

Remote access and support tools for managing computers and providing technical assistance.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://www.teamviewer.com/" /> [TeamViewer](https://www.teamviewer.com/)</> | Remote access and support software for computers and mobile devices. | <PlatformBadges items={['windows', 'linux', 'macos', 'android']} /> |
| <><SourceBadge url="https://anydesk.com/" /> [AnyDesk](https://anydesk.com/)</> | Remote desktop software for remote access, support, and administration. | <PlatformBadges items={['windows', 'linux', 'macos', 'android']} /> |
| <><SourceBadge url="https://rustdesk.com/" github="https://github.com/rustdesk/rustdesk" /> [RustDesk](https://rustdesk.com/)</> | Open-source remote desktop software for remote access and support. | <PlatformBadges items={['windows', 'linux', 'macos', 'android']} /> |
| <><SourceBadge url="https://www.tightvnc.com/" /> [TightVNC](https://www.tightvnc.com/)</> | Remote desktop software using the VNC protocol. | <PlatformBadges items={['windows', 'linux']} /> |

## Software Installation and Package Management

Tools for installing, updating, and managing applications and packages.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://ninite.com/" /> [Ninite](https://ninite.com/)</> | Installs and updates multiple popular Windows applications automatically. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://chocolatey.org/" github="https://github.com/chocolatey/choco" /> [Chocolatey](https://chocolatey.org/)</> | Windows package manager for installing, upgrading, and managing software from the command line. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://learn.microsoft.com/windows/package-manager/winget/" github="https://github.com/microsoft/winget-cli" /> [WinGet](https://learn.microsoft.com/windows/package-manager/winget/)</> | Windows package manager for discovering, installing, upgrading, removing, and configuring applications. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://patchmypc.com/home-updater" /> [Patch My PC](https://patchmypc.com/home-updater)</> | Helps install and update common Windows applications. | <PlatformBadges items={['windows']} /> |

## Drivers

Tools for finding, installing, updating, and managing device drivers.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://www.snappy-driver-installer.org/" /> [Snappy Driver Installer Origin](https://www.snappy-driver-installer.org/)</> | Installs and updates Windows device drivers, including offline installation. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://github.com/lostindark/DriverStoreExplorer" github="https://github.com/lostindark/DriverStoreExplorer" /> [Driver Store Explorer](https://github.com/lostindark/DriverStoreExplorer)</> | Inspects and manages the Windows Driver Store and removes unnecessary driver packages. | <PlatformBadges items={['windows']} /> |

## File Managers and Search

Utilities for finding, browsing, and managing files.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://www.voidtools.com/" /> [Everything](https://www.voidtools.com/)</> | Fast file-name search utility for Windows. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://explorerplusplus.com/" github="https://github.com/derceg/explorerplusplus" /> [Explorer++](https://explorerplusplus.com/)</> | Lightweight file manager for Windows with multiple tabs and advanced file-management features. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://www.ghisler.com/" /> [Total Commander](https://www.ghisler.com/)</> | File manager with dual-pane browsing, file operations, plugins, and advanced management features. | <PlatformBadges items={['windows']} /> |
| <><SourceBadge url="https://one.one.one.one/" /> [Everything Toolbar](https://www.voidtools.com/support/everything/command_line_interface/)</> | Integrates Everything search into Windows workflows and the command line. | <PlatformBadges items={['windows']} /> |

## Archives and File Utilities

Tools for creating, extracting, and managing archives and compressed files.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| <><SourceBadge url="https://www.7-zip.org/" github="https://github.com/ip7z/7zip" /> [7-Zip](https://www.7-zip.org/)</> | File archiver with a high compression ratio and support for many archive formats. | <PlatformBadges items={['windows', 'linux', 'macos']} /> |
| <><SourceBadge url="https://peazip.github.io/" github="https://github.com/peazip/PeaZip" /> [PeaZip](https://peazip.github.io/)</> | Open-source file archiver and file manager supporting many archive formats. | <PlatformBadges items={['windows', 'linux']} /> |

## Optical Media

Tools and hardware references for CD, DVD, Blu-ray, disc imaging, burning, verification, ripping, and optical-drive troubleshooting.

| Tool | Description | Supported platforms |
| --- | --- | --- |
| [CD](#) | Compact Disc media and related storage formats. | <PlatformBadges items={['cross']} /> |
| [DVD](#) | Digital Versatile Disc media, including recordable and rewritable formats. | <PlatformBadges items={['cross']} /> |
| [Blu-ray](#) | Blu-ray optical media, including BD-R, BD-RE, and dual-layer formats. | <PlatformBadges items={['cross']} /> |

> This section will be expanded with optical-drive tools, disc imaging, burning, verification, ripping, and recovery resources.
