---
sidebar_position: 3
---

import PlatformBadges from '@site/src/components/PlatformBadges';
import SourceBadge from '@site/src/components/SourceBadge';

# Privacy & Security

Security software, antivirus, malware-removal tools, file and URL scanners, and privacy utilities.

## Anti-Virus

| Tool | Description | Supported platforms | Source |
| --- | --- | --- | --- |
| [Kaspersky](https://www.kaspersky.com/) | Antivirus and cybersecurity software providing real-time protection against malware, viruses, ransomware, phishing, and other online threats. | <PlatformBadges items={['windows', 'macos', 'android', 'ios']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://www.kaspersky.com/" /> |
| [Malwarebytes](https://www.malwarebytes.com/) | Cybersecurity software that detects and removes viruses and malware, with protection against malware, ransomware, and harmful websites. | <PlatformBadges items={['windows', 'macos', 'android', 'ios']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://www.malwarebytes.com/" /> |
| [ClamAV](https://www.clamav.net/) | Open-source antivirus engine for detecting trojans, viruses, malware, and other malicious threats. | <PlatformBadges items={['windows', 'macos', 'linux']} /> | <PlatformBadges items={['opensource']} /> <SourceBadge url="https://www.clamav.net/" github="https://github.com/Cisco-Talos/clamav" /> |

## File & URL Scanners

Tools for scanning files, URLs, websites, and other online resources for malware, phishing, suspicious content, and other potential security threats.

| Tool | Description | Supported platforms | Source |
| --- | --- | --- | --- |
| [Triage](https://tria.ge/) | Malware analysis sandbox for analyzing suspicious files with detections and configuration extraction for many malware families. | <PlatformBadges items={['web', 'online']} /> | <SourceBadge url="https://tria.ge/" /> |
| [VirusTotal](https://www.virustotal.com/) | Online service for analyzing files, URLs, domains, and IP addresses using multiple security engines and sources. | <PlatformBadges items={['web', 'online']} /> | <SourceBadge url="https://www.virustotal.com/" /> |
| [URLVoid](https://www.urlvoid.com/) | Website reputation checker that analyzes domains against multiple blocklists and reputation services. | <PlatformBadges items={['web', 'online']} /> | <SourceBadge url="https://www.urlvoid.com/" /> |
| [URLScan](https://urlscan.io/) | Website scanning service that records page requests, resources, domains, and other browser activity. | <PlatformBadges items={['web', 'online']} /> | <SourceBadge url="https://urlscan.io/" /> |

## Virus Removers

Tools designed to detect, remove, and clean malware, viruses, potentially unwanted programs, and other threats.

| Tool | Description | Supported platforms | Source |
| --- | --- | --- | --- |
| [Malwarebytes AdwCleaner](https://www.malwarebytes.com/adwcleaner) | Adware cleaner that finds and removes unwanted programs and junkware. | <PlatformBadges items={['windows', 'free']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://www.malwarebytes.com/adwcleaner" /> |
| [ESET Online Scanner](https://www.eset.com/int/home/online-scanner/) | On-demand malware scanner for detecting and removing viruses, trojans, spyware, and other threats. | <PlatformBadges items={['windows', 'free']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://www.eset.com/int/home/online-scanner/" /> |
| [HitmanPro](https://www.hitmanpro.com/en-us/hmp) | On-demand malware scanner designed to detect and remove malware and potentially unwanted programs. | <PlatformBadges items={['windows']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://www.hitmanpro.com/en-us/hmp" /> |
| [Housecall Launcher](https://www.trendmicro.com/en_us/forHome/products/housecall.html) | On-demand security scanner for detecting viruses, malware, trojans, spyware, and related threats. | <PlatformBadges items={['windows', 'macos', 'free']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://www.trendmicro.com/en_us/forHome/products/housecall.html" /> |
| [Kaspersky Virus Removal Tool](https://www.kaspersky.com/downloads/free-virus-removal-tool) | Free tool that helps remove malware from an infected PC. | <PlatformBadges items={['windows', 'free']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://www.kaspersky.com/downloads/free-virus-removal-tool" /> |
| [Norton Power Eraser](https://support.norton.com/sp/en/us/home/current/solutions/kb20100824120155EN) | Aggressive malware-removal tool for detecting threats that may be difficult for traditional antivirus products to detect. | <PlatformBadges items={['windows', 'free']} /> | <PlatformBadges items={['closed-source']} /> <SourceBadge url="https://support.norton.com/sp/en/us/home/current/solutions/kb20100824120155EN" /> |
| [TronScript](https://old.reddit.com/r/TronScript/) | Automated Windows PC cleanup script that uses a collection of tools and scripts to clean up and disinfect Windows machines. | <PlatformBadges items={['windows', 'cli', 'free']} /> | <PlatformBadges items={['opensource', 'free']} /> <SourceBadge github="https://github.com/bmrf/tron" /> |

## Password Managers

| Tool | Description | Supported platforms | Source |
| --- | --- | --- | --- |
| [KeePassXC](https://keepassxc.org/) | Cross-platform password manager for securely storing passwords in encrypted databases. | <PlatformBadges items={['windows', 'linux', 'macos']} /> | <PlatformBadges items={['opensource', 'free']} /> <SourceBadge url="https://keepassxc.org/" github="https://github.com/keepassxreboot/keepassxc" /> |

## Two-Factor Authentication (2FA)

| Tool | Description | Supported platforms | Source |
| --- | --- | --- | --- |
| [KeePassXC](https://keepassxc.org/) | Password manager that can store TOTP secrets and calculate timed one-time passwords for online services. | <PlatformBadges items={['windows', 'linux', 'macos']} /> | <PlatformBadges items={['opensource', 'free']} /> <SourceBadge url="https://keepassxc.org/" github="https://github.com/keepassxreboot/keepassxc" /> |

> **Security note:** KeePassXC can store and generate TOTP codes for online services. It also supports YubiKey and OnlyKey challenge-response to strengthen protection of the encrypted database, although KeePassXC explicitly notes that this is not technically a second authentication factor. For maximum security, KeePassXC recommends considering a separate database for TOTP secrets rather than storing them with the associated passwords. 