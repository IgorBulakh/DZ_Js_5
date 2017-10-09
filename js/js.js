//alert('one')

// task_1
function someFunc(){
var str = document.getElementById('stringLength').value;
console.log(str);
console.log(str.length);
//alert()
}
document.getElementById('btn').onclick = someFunc;

// task_2
var imgArry = ['if_firefox_98563.png', 'if_google_256x256x32_98586.png', 'if_google_chrome_98574.png', 'if_internetexplorer_98571.png'];
var imgName = document.getElementById('imgName');

function someFunc2(){
	for (var i = 0; i < imgArry.length; i++){
		var ollImg = document.createElement('img');
		ollImg.src = 'img/' + imgArry[i];
		imgName.insertBefore(ollImg, imgName.children[0])
	}
}
	document.getElementById('btn2').onclick = someFunc2


function someFunc3(){
	var url = document.getElementById('stringUrl').value;
	if (~url.indexOf('http://')){
	console.log(url.substring(7));
}
	else if (~url.indexOf('https://')){
	console.log(url.substring(8));
}
	else {
		console.log(url.substring(0))
	}
	// url.href = ' ';
	//console.log(location.protocol+"//"+location.host);
	// console.log(url.hostname);
}
document.getElementById('btn3').onclick = someFunc3;

//task_4
function someFunc4(){
	var urlStr = document.getElementById('urlStr').value;
	// if (~urlStr.indexOf('http://')){
	// 	console.log(urlStr.slice())
	// }
console.log(urlStr.slice(-7));
}
document.getElementById('btn4').onclick = someFunc4;

//task_5
function someFunc5(){
	//document.getElementById('iDontKnow').value;
	alert('I do not know how to do this task.')

}
document.getElementById('btn5').onclick = someFunc5;

// task_6
function someFunc6(){
	var str = document.getElementById('stringKode').value;
	console.log(str.charCodeAt());
}
document.getElementById('btn6').onclick = someFunc6;


