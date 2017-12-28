var userNumber;
var numberSystem, numberSystem2;
var res, result;
var footerColor;
var time, hour, minute, second;
var colorToFooter;

footerColor = document.getElementById('footerColor');

function resultNumber(){
	userNumber = document.getElementById('num').value;
	numberSystem = document.getElementById('numberSystem').value;
	numberSystem2 = document.getElementById('numberSystem2').value;
	
	numberSystem = +numberSystem;
	numberSystem2 = +numberSystem2;
	
	res = parseInt(userNumber, numberSystem);
	if (isNaN(res)){
		swal("Ошибка!", "Проверьте правильность системы счисления!", "error");
	} else {
		result = res.toString(numberSystem2);
		swal("Результат: ", result, "success");
	}
}

function timeColor(){
	time = new Date();
	hour = time.getHours().toString();
	minute = time.getMinutes().toString();
	second = time.getSeconds().toString();

	if (hour.length < 2){
		hour = '0' + hour;
	} 
	if (minute.lenght < 2){
		minute = '0' + minute;
	}
	if (second.length < 2){
		second = '0' + second;
	}

	colorToFooter = '#' + hour + minute + second;

	footerColor.style.backgroundColor = colorToFooter;
}

setInterval(timeColor, 1000);