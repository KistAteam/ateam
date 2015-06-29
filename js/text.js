
	var img = new Array();
	var img_s = new Array();
	
	img[0] = new Image();
	img[0].src = "img/boy02.png";
	img[1] = new Image();
	img[1].src = "img/boy.png";

	img_s[0] = new Image();
	img_s[0].src = "img/boy02.png";
	img_s[1] = new Image();
	img_s[1].src = "img/test4.png";
	

var cnt = 0;

function image_count(){
	if(cnt==1){
		cnt = 0;
	}
	else{
		cnt++;
	}
	document.getElementById("gazo").src=img[cnt].src;
}

function image_count_n(){
	if(cnt==1){
		cnt = 0;
	}
	else{
		cnt++;
	}
	document.getElementById("gazo").src=img_s[cnt].src;
}