// browser_action popup script

document.addEventListener('click', function(e) {
	if (!e.target.classList.contains('cat')) {
		return;
	}

	var chosenCat = e.target.textContent;

	chrome.tabs.executeScript(null, {
		file: "/content_scripts/cat.js"
	});

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {cat: chosenCat});
	});

});
