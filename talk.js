//配列の準備
	var img = new Array();
	var img_s = new Array();
	var textarea = new Array();

/* 朝の場合の画像 */
	img[0] = new Image();
	img[0].src = "img/boy02.png";
	img[1] = new Image();
	img[1].src = "img/test5.png";
	img[2] = new Image();
	img[2].src = "img/screen.png";


/* 夜の場合の画像 */
	img_s[0] = new Image();
	img_s[0].src = "img/boy02.png";
	img_s[1] = new Image();
	img_s[1].src = "img/test4.png";
	img_s[2] = new Image();
	img_s[2].src = "img/screen.png";


/* テキストエリア */
	textarea[0] = "挨拶しましょう";
	textarea[1] = "見てんじゃねー!!"
	textarea[2] = "＼(^o^)／  オワタ";

/* 触れるべからず */
var cnt = 0;

//朝の場合
function image_count(){
	if(cnt==2){
		cnt = 0;
	}
	else{
		cnt++;
	}
	document.getElementById("gazo").src=img[cnt].src;
}

//夜の場合
function image_count_n(){
	if(cnt==2){
		cnt = 0;
	}
	else{
		cnt++;
	}
	document.getElementById("gazo").src=img_s[cnt].src;
}

//テキストエリア
function text(){
	var text = document.getElementById("text");
	text.innerHTML = textarea[cnt];
}