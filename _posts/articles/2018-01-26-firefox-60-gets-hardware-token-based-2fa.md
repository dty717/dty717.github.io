---
layout: post
title: Firefox 60 gets Hardware Token-based 2FA
date: 2018-01-26 11:00
author: nvinside
comments: true
categories: [Browser, Firefox]
---
<a href="https://www.yubico.com/start/" rel="noopener">Yubikey</a> users stay tuned, Hardware Token-based 2FA gets integrated native into Firefox. <a href="https://wiki.mozilla.org/RapidRelease/Calendar" rel="noopener">Firefox 60 will be released 8. May 2018</a>.

[caption id="attachment_2288" align="aligncenter" width="500"]<img class="size-full wp-image-2288 aligncenter" src="https://chefkochblog.files.wordpress.com/2018/01/20180125_webauthn_api.jpg" alt="20180125_WebAuthn_API" width="500" height="411" /> Yubikey, registration via Firefox 60. Picture: Mozilla Blog[/caption]

<!--more-->

Good news for security fans, Mozilla will activate the two-factor authentification API by default in Firefox 60 which means FIDO U2F will be supported. Yubikey, Nitrokey or U2F Zero using these hardware tokens to get the conversation between the Browser and the hardware. Google already added support for it in Chrome v62. Web services like Gmail do support it already since one or more years but it's not enabled by default because Google says the web should be 'comfortable' for everyone and some people might not want to use it.

<h3>Token-Generators supported</h3>

Programs like <a href="https://authy.com/">Authy</a> or <a href="https://en.wikipedia.org/wiki/Google_Authenticator">Google Authenticator</a> are supported as well. So developers can make the switch to provide an alternative login method.

<h2>Conclusion</h2>

Not many people using 2FA which is a sad fact but hopefully we see more people making the switch, personally I use a Yubikey Neo in combination with Authy for all my services like YouTube, Google, WordPress and more to make it harder to hack my login session.

I think some people are scared that they need to buy such a hardware key which is around 10-70 dollars or simply too lazy to do an extra step but once you are hacked you would regret it instantly. I see this as an important step forward in the right direction and I would love to see <a href="https://twofactorauth.org/">more apps and web services supporting it</a>. The web changes daily and you should stay up-2-date and use the latest techniques to harden your overall security setup, this is one link in the chain.

<span style="text-decoration:underline;"><strong>Source</strong></span>

<ul>
    <li>
<p class="post__title">Using Hardware Token-based 2FA with the WebAuthn API (<a href="https://hacks.mozilla.org/2018/01/using-hardware-token-based-2fa-with-the-webauthn-api/" rel="noopener">hacks.mozilla.org</a>)</p>
</li>
    <li>Who's using 2FA? Sweet FA. Less than 10% of Gmail users enable two-factor authentication (<a href="http://www.theregister.co.uk/2018/01/17/no_one_uses_two_factor_authentication/" rel="noopener">theregister.co.uk</a>)</li>
</ul>

&nbsp;
