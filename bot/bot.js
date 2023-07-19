// ==UserScript==
// @name         bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  search bot
// @author       danilova olga
// @match        https://www.google.com/*
// @match        https://www.homestuck.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["MS PAINT ADVENTURES WEBCOMICS",
                "Andrew Hussie",
                "mspaintadventures"];
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

    } else if (location.hostname == "homestuck.com") {
        console.log("на сайте!");
          setInterval(() => {
    let index = getRandom(0, links.length);

    if (getRandom(0 , 101) >= 70) {
      location.href = "https://www.google.com/";
    }
    if (links.length == 0) {
      location.href = "https://homestuck.com";
    }
    else if (links[index].href.indexOf("homestuck.com") != -1) {
      links[index].click();
    }
  }, getRandom(3500, 5500))


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
  let elementExist = setInterval(() => {
    let element = document.querySelector(".YyVfkd");
    if ( element != null) {
      if (element.innerText == "5") {
        nextGooglePage = false;
        location.href = "https://www.google.com/";
      }
      clearInterval(elementExist);
    }
  }, 150)

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
