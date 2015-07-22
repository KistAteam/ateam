var random = Math.floor(Math.random() * 2);
var qtn = new Array();

qtn[0] = "好きな食べ物は何ですか？";
qtn[1] = "今の天気はどうですか？";

function question(){
	document.write(qtn[random]);
}

function dispTextarea(){
	var tarea  = document.fm.tarea.value;
	
	switch(random){
		case 0:
		document.getElementById("text").innerHTML = tarea+"ですか。おいしいですよね！僕は電気ばっかり食べてますよ！";
		break;
		
		case 1:
		document.getElementById("text").innerHTML = "そうですか。こっちは0ときどき1ですね。";
		break;
	}
}