// ==UserScript==
// @name        Imgur without Social Stuff
// @description Removes annoying content from the main page
// @namespace   https://imgur.com
// @icon        https://imgur.com/favicon.ico
// @include     *.imgur.com/*
// @run-at      document-start
// @version     1.0
// @license     CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @downloadURL https://raw.githubusercontent.com/lidel/userscripts/master/imgur-no-social.user.js
// @homepageURL https://github.com/lidel/userscripts
// @grant       GM_addStyle
// ==/UserScript==

var css = "#content .sentence-sorting, #imagelist.home-gallery, #content #top-comments { display: none !important; }";

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

