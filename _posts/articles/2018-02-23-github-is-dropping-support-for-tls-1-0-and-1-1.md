---
layout: post
title: GitHub is dropping support for TLS 1.0 and 1.1
date: 2018-02-23 12:23
author: nvinside
comments: true
categories: [GitHub, Security, TLS]
---
Good news for all security friends out there, GitHub the well-known code-publishing platform just dropped support for weak crypto defaults, their <a href="https://githubengineering.com/crypto-removal-notice/" target="_blank" rel="noopener">Weak cryptographic standards removal notice</a> which already was posted a while back - states that as of yesterday all of the weak cryptos are now fully removed.

&nbsp;

[caption id="attachment_3012" align="aligncenter" width="350"]<img class=" size-full wp-image-3012 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/02/fsheyq_5_400x400.png" alt="FSHEYq_5_400x400" width="350" height="350" /> Serious GitHub Cat. Picture Source: GitHub[/caption]

&nbsp;

<!--more-->

<h2>Permanently disable deprecated algorithms</h2>

This change means that several programs needs to be updated and Git and Visual Studio already got the update, among Java and Git's Credential Manager for Windows. In case you get a warning that the connection couldn't be established (eg "SSL connect error"), just ensure you downloaded and installed the latest update.

<h3>The change is good but most companies still don't support TLS 1.2</h3>

Companies that still don't support TLS v1.2 are (in my experience) unlikely to notice a 1-hour outage and if they do notice it, unlikely to have someone with the skills to diagnose it within 1 hour and unlikely to have proper logging to diagnose it after the fact which means a lot of time is 'wasted' just because they're not merging to secure 'defaults' quickly enough, however right now everything seems to work and I not heard many complaints about GitHub recently.

<h2>Google and NSA still using TLS 1.0 (as fallback?)</h2>

<pre><code>[root@CK ~]# nmap --script ssl-enum-ciphers -p 443 google.com

Starting Nmap 7.40 ( https://nmap.org ) at 2018-02-23 12:02 UTC
Nmap scan report for google.com (74.125.21.139)
Host is up (0.0012s latency).
Other addresses for google.com (not scanned): 2607:f8b0:4002:c06::71 74.125.21.138 74.125.21.102 74.125.21.113 74.125.21.100 74.125.21.101
rDNS record for 74.125.21.139: yv-in-f139.1e100.net
PORT    STATE SERVICE
443/tcp open  https
| ssl-enum-ciphers:
|   TLSv1.0:
|     ciphers:
|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (prime256v1) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (prime256v1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_3DES_EDE_CBC_SHA (rsa 2048) - C
|     compressors:
|       NULL
|     cipher preference: server
|     warnings:
|       64-bit block cipher 3DES vulnerable to SWEET32 attack
|   TLSv1.1:
|     ciphers:
|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (prime256v1) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (prime256v1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_3DES_EDE_CBC_SHA (rsa 2048) - C
|     compressors:
|       NULL
|     cipher preference: server
|     warnings:
|       64-bit block cipher 3DES vulnerable to SWEET32 attack
|   TLSv1.2:
|     ciphers:
|       TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 (prime256v1) - A
|       TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 (prime256v1) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 (prime256v1) - A
|       TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA (prime256v1) - A
|       TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA (prime256v1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (rsa 2048) - A
|       TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (rsa 2048) - A
|       TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (rsa 2048) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_GCM_SHA256 (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_GCM_SHA384 (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_3DES_EDE_CBC_SHA (rsa 2048) - C
|     compressors:
|       NULL
|     cipher preference: server
|     warnings:
|       64-bit block cipher 3DES vulnerable to SWEET32 attack
|_  least strength: C
</code></pre>

<pre><code>[root@CK ~]# nmap --script ssl-enum-ciphers -p 443 nsa.gov

Starting Nmap 7.40 ( https://nmap.org ) at 2018-02-23 12:14 UTC
Nmap scan report for nsa.gov (104.90.76.232)
Host is up (0.013s latency).
rDNS record for 104.90.76.232: a104-90-76-232.deploy.static.akamaitechnologies.com
PORT    STATE SERVICE
443/tcp open  https
| ssl-enum-ciphers:
|   TLSv1.0:
|     ciphers:
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (secp256r1) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|     compressors:
|       NULL
|     cipher preference: server
|   TLSv1.1:
|     ciphers:
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (secp256r1) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|     compressors:
|       NULL
|     cipher preference: server
|   TLSv1.2:
|     ciphers:
|       TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (secp256r1) - A
|       TLS_RSA_WITH_AES_256_GCM_SHA384 (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_GCM_SHA256 (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA256 (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA256 (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|     compressors:
|       NULL
|     cipher preference: server
|_  least strength: A
</code></pre>

<h3>And GitHub as 'good' example</h3>

<pre><code>[root@CK ~]# nmap --script ssl-enum-ciphers -p 443 github.com

Starting Nmap 7.40 ( https://nmap.org ) at 2018-02-23 11:58 UTC
Nmap scan report for github.com (192.30.253.112)
Host is up (0.014s latency).
Other addresses for github.com (not scanned): 192.30.253.113
rDNS record for 192.30.253.112: lb-192-30-253-112-iad.github.com
PORT    STATE SERVICE
443/tcp open  https
| ssl-enum-ciphers:
|   TLSv1.2:
|     ciphers:
|       TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 (secp256r1) - A
|       TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (secp256r1) - A
|       TLS_RSA_WITH_AES_128_GCM_SHA256 (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_GCM_SHA384 (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA256 (rsa 2048) - A
|       TLS_RSA_WITH_AES_128_CBC_SHA (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA256 (rsa 2048) - A
|       TLS_RSA_WITH_AES_256_CBC_SHA (rsa 2048) - A
|     compressors:
|       NULL
|     cipher preference: server
|_  least strength: A
</code></pre>

<h2>Final Words</h2>

GitHub change is really good because it secures their website and the content but since TLS is a software related thing people really should now upgrade and ensure they're using the latest Browsers, some might not like this because it means a little bit more 'work' but the internet of today needs people which are in line which means hackers never sleeping and so should you monitor your page and products on a regular basis to provide the maximum possible security.

The internet today needs more and faster changes, whenever people like it or not that's the only chance we have to fight against the people which still have an easy game on us because most servers, including the government ones using weak crypto defaults.
