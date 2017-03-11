// ==UserScript==
// @name           Custom Fixed Font in Gmail
// @namespace      https://mail.google.com
// @include        https://mail.google.com/*
// @icon           https://mail.google.com/favicon.ico
// @run-at         document-start
// @description    Custom fixed-font in Gmail messages
// @version        1.2.1
// @license        CC0; https://creativecommons.org/publicdomain/zero/1.0/
// @downloadURL    https://raw.githubusercontent.com/lidel/userscripts/master/gmail-fixed-font.user.js
// @homepageURL    https://github.com/lidel/userscripts
// @grant          none
// ==/UserScript==

var fontName = 'Droid Sans Mono';
var fontSubset = 'latin';

// dragons below this line
var fontCss = 'font-family: 'DejaVu Sans Mono', \'' + fontName + '\', monospace !important;';
// plain-text messages
var css = '.ii, .Ak {' + fontCss + '}';
// editor
css += '.editable {' + fontCss + '}';
// load
var heads = document.getElementsByTagName('head');
if (heads.length > 0) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '//fonts.googleapis.com/css?family=' + fontName.replace(/\ /g, '+') + '&subset=' + fontSubset;
  heads[0].appendChild(link);
  var node = document.createElement('style');
  node.type = 'text/css';
  node.appendChild(document.createTextNode(css));
  heads[0].appendChild(node);
}
