// ==UserScript==
// @name        Imgur without Social Stuff
// @description Removes annoying content from the main page
// @namespace   https://imgur.com
// @icon        https://imgur.com/favicon.ico
// @include     https://imgur.com/*
// @run-at      document-start
// @version     1.3
// @license     CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @downloadURL https://raw.githubusercontent.com/lidel/userscripts/master/imgur-no-social.user.js
// @homepageURL https://github.com/lidel/userscripts
// @grant       GM_addStyle
// ==/UserScript==

// display: none does not work because it triggers loop of infinite scroll downloads, use opacity instead
var css = "#content .sentence-sorting, #content .home-gallery, #content #extended-imagelist, #content #top-comments { opacity: 0.01 !important; }";

if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node);
    }
}

