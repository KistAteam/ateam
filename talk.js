/* 配列の準備 */

//ルート別の画像の変数
	var img_root1 = new Array();
	var img_root2 = new Array();
	var img_root3 = new Array();

//ルート別のテキストエリアの変数
	var textarea_root1 = new Array();
	var textarea_root2 = new Array();
	var textarea_root3 = new Array();
	
//ルート別の選択ボタンの変数
	var button_root1 = new Array();
	var button_root2 = new Array();
	var button_root3 = new Array();
	

/* ルート１の場合の画像 */
	img_root1[0] = new Image();
	img_root1[0].src = "img/boy02.png";
	img_root1[1] = new Image();
	img_root1[1].src = "img/test5.png";
	img_root1[2] = new Image();
	img_root1[2].src = "img/screen.png";


/* ルート２の場合の画像 */
	img_root2[0] = new Image();
	img_root2[0].src = "img/boy02.png";
	img_root2[1] = new Image();
	img_root2[1].src = "img/test4.png";
	img_root2[2] = new Image();
	img_root2[2].src = "img/screen.png";

/* ルート３の場合の画像 */
	img_root3[0] = new Image();
	img_root3[0].src = "img/boy02.png";

/* テキストエリア */
	
	//root1のテキストエリア
	textarea_root1[0] = "挨拶しましょう";
	textarea_root1[1] = "おはようございます!!";

	//root2のテキストエリア
	textarea_root2[0] = "挨拶しましょう";
	textarea_root2[1] = "こんにちは!!";
	
	//root3のテキストエリア
	textarea_root3[0] = "挨拶しましょう";
	textarea_root3[1] = "こんばんは!!";

/* 選択ボタン */
//ルート1の選択ボタン
	button_root1[0] = "おはよう"
	button_root1[1] = "ルート1を選びました"

//ルート2の選択ボタン
	button_root2[0] = "こんにちは"
	button_root2[1] = "ルート2を選びました"

//ルート3の選択ボタン
	button_root3[0] = "こんばんは"
	button_root3[1] = "ルート3を選びました"

/* 終了処理用 */
var end_img = new Image();
end_img.src ="img/window.png"
var end_text = "バイバイ！！";

/* 触れるべからず */
var cnt = 0;

//root1の場合
function root1(){
	if(cnt == 1){
		document.getElementById("table").style.display = "none";
	}
	else{
	cnt++;
	}
	document.getElementById("gazo").src=img_root1[cnt].src;
	var text = document.getElementById("text");
	text.innerHTML = textarea_root1[cnt];
	var button = document.getElementById("root1");
	button.innerHTML = button_root1[cnt];
	var button = document.getElementById("root2");
	button.innerHTML = button_root1[cnt];
	var button = document.getElementById("root3");
	button.innerHTML = button_root1[cnt];
}

//root2の場合
function root2(){
	if(cnt == 1){
		document.getElementById("table").style.display = "none";
	}
	else{
		cnt++;
	}
	document.getElementById("gazo").src=img_root1[cnt].src;
	var text = document.getElementById("text");
	text.innerHTML = textarea_root2[cnt];
	var button = document.getElementById("root1");
	button.innerHTML = button_root2[cnt];
	var button = document.getElementById("root2");
	button.innerHTML = button_root2[cnt];
	var button = document.getElementById("root3");
	button.innerHTML = button_root2[cnt];
}

//root3の場合
function root3(){
	if(cnt==1){
		document.getElementById("table").style.display = "none";
	}
	else{
		cnt++;
	}
	document.getElementById("gazo").src=img_root2[cnt].src;
	var text = document.getElementById("text");
	text.innerHTML = textarea_root3[cnt];
	var button = document.getElementById("root1");
	button.innerHTML = button_root3[cnt];
	var button = document.getElementById("root2");
	button.innerHTML = button_root3[cnt];
	var button = document.getElementById("root3");
	button.innerHTML = button_root3[cnt];
}