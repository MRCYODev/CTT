---
sidebar_position: 5
---

# GSM & USSD Codes

GSM is a cellular communication standard. USSD is a live text-based session with a carrier; codes normally begin with `*` and end with `#`. Carrier support and dialing formats vary.

## Call forwarding

| Code | Function |
| --- | --- |
| `**21*(number)#` | Activate unconditional forwarding |
| `##21#` | Deactivate unconditional forwarding |
| `*#21#` | Check unconditional forwarding status |
| `**61*(number)**(seconds)#` | Forward when no answer |
| `##61#` | Deactivate no-answer forwarding |
| `*#61#` | Check no-answer forwarding status |
| `**67*(number)#` | Forward when busy |
| `##67#` | Deactivate busy forwarding |
| `*#67#` | Check busy forwarding status |
| `**62*(number)#` | Forward when unreachable |
| `##62#` | Deactivate unreachable forwarding |
| `*#62#` | Check unreachable forwarding status |
| `##002#` | Cancel all forwarding rules |
| `##004#` | Cancel all conditional forwarding |

## Call waiting and caller ID

| Code | Function |
| --- | --- |
| `*43#` | Activate call waiting |
| `#43#` | Deactivate call waiting |
| `*#43#` | Check call-waiting status |
| `#31#(number)` | Hide number for the next call |
| `*31#(number)` | Show number for the next call |
| `*#31#` | Check caller-ID restriction status |
| `*#30#` | Check incoming caller-ID status |
| `*#76#` | Check connected-line presentation status |
| `*#77#` | Check connected-line restriction status |

## Call barring

| Code | Function |
| --- | --- |
| `**33*(PIN)#` | Bar all outgoing calls |
| `##33*(PIN)#` | Remove outgoing-call barring |
| `*#33#` | Check outgoing-call barring status |
| `**331*(PIN)#` | Bar all outgoing international calls |
| `##331*(PIN)#` | Remove international-call barring |
| `**35*(PIN)#` | Bar all incoming calls |
| `##35*(PIN)#` | Remove incoming-call barring |
| `*#35#` | Check incoming-call barring status |
| `**351*(PIN)#` | Bar incoming calls while roaming |
| `##330*(PIN)#` | Remove all call barring |

## Phone and network information

| Code | Function |
| --- | --- |
| `*#06#` | Show IMEI number |
| `*#07#` | Show SAR information |
| `*#*#4636#*#*` | Android phone and network information |

## Voicemail

| Code | Function |
| --- | --- |
| `**004*(number)#` | Set all conditional forwarding to a number |
| `##004#` | Remove all conditional forwarding |

> Do not use codes that reset user data or alter call-barring settings without the owner’s authorization and carrier confirmation.
