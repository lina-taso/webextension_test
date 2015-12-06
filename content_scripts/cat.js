// content_script

chrome.runtime.onMessage.addListener(catten);

function catten(request, sender, sendResponse) {
	removeEverything();
	insertCat(catNameToURL(request.cat));
	chrome.runtime.onMessage.removeListener(catten);
}

function removeEverything() {
	while (document.body.firstChild) {
		document.body.firstChild.remove();
	}
}

function insertCat(catURL) {
	var catImage = document.createElement('img');
	catImage.setAttribute('src', catURL);
	catImage.setAttribute('style', 'width: 500px');
	catImage.setAttribute('style', 'height: 300px');
	document.body.appendChild(catImage);
}

function catNameToURL(catName) {
	switch (catName) {
		case "cat1":
		return chrome.extension.getURL('webaccesible/cat1.jpg');
		case "cat2":
		return chrome.extension.getURL('webaccesible/cat2.jpg');
		case "cat3":
		return chrome.extension.getURL('webaccesible/cat3.jpg');
	};
	return null;
}
