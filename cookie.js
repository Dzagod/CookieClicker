var clickNum =0;
function coockieClick() {
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