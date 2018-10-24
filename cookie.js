var clickNum =0;
function cookieClick() {
	clickNum = clickNum + 1;
	var cookieCounter = document.getElementById("cookieCounter");
	cookieCounter.innerHTML = clickNum;
	var image = document.getElementById("cookieImage");
	image.classList.add("resize");
	setTimeout(removeClass, 100);
}
function removeClass() {
	var image = document.getElementById("cookieImage");
	image.classList.remove("resize");
}
var collectorChild = {
	firstPrice: 10;
	changePrice: 2;
	collectedCookies: 2;
	value: 0;
	amount: 0;
	id: 'one';	
}
var collectorHousekeeper = {
	firstPrice: 100;
	changePrice: 20;
	collectedCookies: 22;
	value: 0;
}
var collectorCandyman = {
	firstPrice: 1000;
	changePrice: 200;
	collectedCookies: 222;
	value: 0;
}

var collectors = [collectorChild, collectorHousekeeper, collectorCandyman];

function getId(buttonId) {
	function buyCollector()

};

function buyCollector(buttonId, firstPrice, changePrice, collectedCookies) {
	var findCollector = collectors.indexOf(buttonId);
	console log(findCollector);
}


