
	var img = new Array();
	
	img[0] = new Image();
	img[0].src = "img/boy02.png";
	img[1] = new Image();
	img[1].src = "img/boy.png";

var cnt = 0;

function image_count(){
	if(cnt==2){
		cnt = 0;
	}
	else{
		cnt++;
	}
	
	document.getElementById("gazo").src=img[cnt].src;
}