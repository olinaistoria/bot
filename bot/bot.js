// ==UserScript==
// @name         bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  search bot
// @author       danilova olga
// @match        https://www.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["Хоумстак", "homestuck", "mspaintadventures"];
let keyword = keywords[getRandom(0, keywords.length)];
let googleInput = document.getElementsByName("q")[0];

if (btnK != undefined) {
	let i = 0;
	let timerId = setInterval(() => {
		googleInput.value += keyword[i];
		i++;
		if (i == keyword.length) {
			clearInterval(timerId);
			btnK.click();
		}
	}, 500);

} else {
	let nextGooglePage = true;
	for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("homestuck.com")) {
			let link = links[i];
			nextGooglePage = false;
			console.log("mmmm " + link);
			setTimeout(() => {
				link.click();
			}, getRandom(3500, 5500));
			break;
		}
	}
    	if (document.querySelector(".YyVfkd").innerText == "5") {
		nextGooglePage = false;
		location.href = "https://www.google.com/";
	}
	if (nextGooglePage) {
		setTimeout(() => {
			pnnext.click();
		}, getRandom(5000, 7000));
	}
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
