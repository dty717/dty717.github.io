---
layout: post
title: Identify your Intel HD & Iris Graphics Driver Codes
date: 2018-02-19 10:03
author: nvinside
comments: true
categories: [codename, driver, Intel, Intel HD]
---
Maybe you want to install the drivers like I do, manually via Inf (Driver files) only and then you might need to identify which files are for your graphics card. If you haven't any Device description, manual or already installed driver you might want to identify which card is yours and you then see often only 'cryptic' names or codenames. The following list is to 'decrypt' those names and to reveal which code represents which hardware.

[caption id="attachment_2897" align="aligncenter" width="390"]<img class=" size-full wp-image-2897 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/intel-gpu-z.png" alt="Intel GPU-Z" width="390" height="516" /> GPU-Z is a free and portable tool. it's good but it doesn't tell you which driver files are been used or which one you need in case you want to upgrade your drivers.[/caption]

<!--more-->

The problem is that there is not much what you can do except opening the Inf file and search for the strings yourself, the problem here is that this could be confusing because some strings representing different OS versions, architectures or revisions, so here is a current list of all latest codenames.

; SKL HW (Skylake)
iSKLULTGT1 = "Intel(R) HD Graphics 510"
iSKLULTGT2 = "Intel(R) HD Graphics 520"
iSKLULXGT2 = "Intel(R) HD Graphics 515"
iSKLDTGT2 = "Intel(R) HD Graphics 530"
iSKLULTGT2f = "Intel(R) HD Graphics 520"
iSKLULTGT3e = "Intel(R) Iris(R) Graphics 540"
iSKLULTGT3 = "Intel(R) HD Graphics 535"
iSKLULTGT328W = "Intel(R) Iris(R) Graphics 550"
iSKLDTGT1 = "Intel(R) HD Graphics 510"
iSKLHaloGT1 = "Intel(R) HD Graphics 510"
iSKLHaloGT4 = "Intel(R) Iris(R) Pro Graphics 580"
iSKLHaloGT3fe = "Intel(R) Iris(R) Graphics 555"
iSKLHaloGT2 = "Intel(R) HD Graphics 530"
iSKLSRVGT3e = "Intel(R) Iris(R) Graphics P555"
iSKLSRVGT4 = "Intel(R) Iris(R) Pro Graphics P580"
iSKLWSGT2 = "Intel(R) HD Graphics P530"
iSKLWSGT4 = "Intel(R) Iris(R) Pro Graphics P580"

; BXT HW (old)

iBXTGTP = "Intel(R) HD Graphics"
iBXTGTP12 = "Intel(R) HD Graphics"

; KBL (Kaby Lake)
iKBLULTGT1 = "Intel(R) HD Graphics 610"
iKBLULTGT2 = "Intel(R) HD Graphics 620"
iKBLULTGT2R = "Intel(R) UHD Graphics 620"
iKBLULTGT2F = "Intel(R) HD Graphics 620"
iKBLULTGT3E15 = "Intel(R) Iris(R) Plus Graphics 640"
iKBLULTGT3E28 = "Intel(R) Iris(R) Plus Graphics 650"
iKBLULXGT2 = "Intel(R) HD Graphics 615"
iKBLDTGT1 = "Intel(R) HD Graphics 610"
iKBLDTGT2 = "Intel(R) HD Graphics 630"
iKBLHALOGT1 = "Intel(R) HD Graphics 610"
iKBLHALOGT2 = "Intel(R) HD Graphics 630"
iKBLWGT2 = "Intel(R) HD Graphics P630"

;CFL (Coffee Lake)
iCFLDTGT1 = "Intel(R) UHD Graphics 610"
iCFLDTGT2 = "Intel(R) UHD Graphics 630"
iCFLDTWSGT2 = "Intel(R) UHD Graphics P630"
iCFLHALOGT2 = "Intel(R) UHD Graphics 630"
iCFLHALOWSGT2 = "Intel(R) UHD Graphics P630"
iCFLULTGT3W15 = "Intel(R) Iris(R) Plus Graphics 640"
iCFLULTGT3W28 = "Intel(R) Iris(R) Plus Graphics 650"
iCFLULTGT3W15EU42 = "Intel(R) Iris(R) Plus Graphics 635"
iCFLULTGT3W28EU42 = "Intel(R) Iris(R) Plus Graphics 645"
iCFLDTGT1W35 = "Intel(R) UHD Graphics 610"
iCFLDTGT2W35 = "Intel(R) UHD Graphics 630"
iCFLDTGT2S8S2F1F = "Intel(R) UHD Graphics"
iCFLDTGT1S6S4S2F1F = "Intel(R) UHD Graphics"
iCFLDTGT2S82S6F2 = "Intel(R) UHD Graphics"
iCFLULTGT2U42U2F2 = "Intel(R) UHD Graphics"
iCFLULTGT1U41FU2F1F = "Intel(R) UHD Graphics"
iCFLULTGT3U43 = "Intel(R) UHD Graphics"
iCFLULTGT2U42FU2F1F = "Intel(R) UHD Graphics"
iCFLULTGT141F2F1F = "Intel(R) UHD Graphics"
iCFLULTGT2U42FU2F2F = "Intel(R) UHD Graphics"

;GLK (Apollo Lake)
iGLKGT2E18 = "Intel(R) UHD Graphics 605"
iGLKGT2E12 = "Intel(R) UHD Graphics 600"

With these codes, you can check if the driver is for your system and your graphics chip. The current drivers offered by Intel are for now for the following chips:

• 7th Gen Intel(R) Core(TM) processor family (codename Kaby Lake)
• 6th Gen Intel(R) Core(TM) processor family (codename Skylake)
• Apollo Lake Platform
• 8th Gen Intel® Core™ processor family (codename Coffee Lake)

<h2>Conclusion</h2>

If you want to manually install drivers to not waste much space or in case you do not want to run into troubles then these codes might help you to identify which driver files you need to look for, of course, it's a little bit easier to install drivers with the provided Setup.exe file but sometimes this can cause troubles or it ends up with leftover files and then you need to use yet other tools to clean up the mess like Display Driver Uninstaller (DDU).
