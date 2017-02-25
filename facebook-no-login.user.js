// ==UserScript==
// @name        Facebook No Login
// @description Removes annoying popups and visual cruft when not logged-in
// @namespace   https://www.facebook.com
// @icon        https://www.facebook.com/favicon.ico
// @include     *.facebook.*/*
// @run-at      document-start
// @version     1.2
// @downloadURL https://raw.githubusercontent.com/lidel/userscripts/master/facebook-no-login.user.js
// @homepageURL https://github.com/lidel/userscripts
// @grant       GM_addStyle
// ==/UserScript==

var css = "#pagelet_bluebar, #pagelet_growth_expanding_cta { display: none !important; }";

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

