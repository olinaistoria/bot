// ==UserScript==
// @name         bing bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bing bot
// @author       danilova olga
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let poisk = document.getElementsByName("search")[0];
let keywords = ["Хоумстак", "homestuck", "mspaintadventures"];
let keyword = keywords[getRandom(0, keywords.length)];

if (poisk != undefined) {
    document.getElementsByName("q")[0].value = keyword;
poisk.click();}
else {

for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("homestuck.com")) {
        let link = links[i];
        console.log("wow my favorite webcomic" + link);
        link.click();
        break;
    }
}
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}




