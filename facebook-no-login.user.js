// ==UserScript==
// @name        Facebook No Login
// @description Removes annoying popups and visual cruft when not logged-in
// @namespace   https://www.facebook.com
// @include     *.facebook.*/*
// @run-at      document-start
// @version     1.0
// @downloadURL https://raw.githubusercontent.com/lidel/userscripts/master/facebook-no-login.user.js
// @homepageURL https://github.com/lidel/userscripts
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle (" #pagelet_bluebar, #pagelet_growth_expanding_cta { display: none !important; } ");
