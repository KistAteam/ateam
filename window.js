var img = "img/window.png";
var textarea = "せまいです。";

var width_max = screen.availWidth;
var width = window.innerWidth;

function window_sereen(){
	if(width_max > width){
		document.getElementById("gazo").src=img.src;
		var text = document.getElementById("text");
		text.innerHTML = textarea[cnt];
}
}