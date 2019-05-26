// ==UserScript==
// @name     WattPad Night Mode
// @version  1
// @include  https://www.wattpad.com/*
// @grant    GM_addStyle
// @description Night Mode for WattPad finally on your desktop too!
// @author   Marco Martinelli
// @license  GPLv3
// ==/UserScript==

function GM_addStyle(css){
    var node = document.createElement('style');
    node.textContent = css;
    var target = document.getElementsByTagName('head')[0] || document.body || document.documentElement;
    target.appendChild(node);
}

GM_addStyle (`
#header *{
    background: #555 !important;
    color: #ccc !important;
}
#funbar-container *{
    background: #333 !important;
    color: #ccc !important;
}
#parts-container-new *{
    background: #000 !important;
    color: #eee !important;
}
`);
