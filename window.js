var window_text = "せまいです。画面幅を最大にして更新してください。";

var width_max = screen.availWidth;
var width = window.innerWidth;

window.onload = function window_sereen(){
	if(width_max > width){
		document.getElementById("fm").style.display="none";
		var window_img = document.getElementById("gazo");
		window_img.src = "img/boy04.png";
		var text = document.getElementById("text");
		text.innerHTML = window_text;
}
}