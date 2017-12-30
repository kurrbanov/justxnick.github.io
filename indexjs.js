var userNumber;
var numberSystem, numberSystem2;
var res, result;
var footerColor;
var time, hour, minute, second;
var colorToFooter;

var plusDegree1, plusDegree2, plusDegree3;
var plusNumber1, plusNumber2;
var plusRes1, plusRes2, plusRes1Res2,plusResult;

var minusDegree1, minusDegree2, minusDegree3;
var minusNumber1, minusNumber2;
var minusRes1, minusRes2, minusRes1Res2,minusResult;

var multiplyDegree1, multiplyDegree2, multiplyDegree3;
var multiplyNumber1, multiplyNumber2;
var multiplyRes1, multiplyRes2, multiplyRes1Res2,multiplyResult;

var divisionDegree1, divisionDegree2, divisionDegree3;
var divisionNumber1, divisionNumber2;
var divisionRes1, divisionRes2, divisionRes1Res2,divisionResult;

footerColor = document.getElementById('footerColor');



function resultNumber(){
	userNumber = document.getElementById('num').value;
	numberSystem = document.getElementById('numberSystem').value;
	numberSystem2 = document.getElementById('numberSystem2').value;
	
	numberSystem = +numberSystem;
	numberSystem2 = +numberSystem2;
	
	if ((numberSystem <= 1) || (numberSystem >= 37) || (numberSystem2 <= 1) || (numberSystem2 >= 37)){
		swal("Ошибка!", "Неправильная система счисления!", "error");
	} else {
		res = parseInt(userNumber, numberSystem);

		if (isNaN(res)){
			swal("Ошибка!", "Проверьте правильность введёного числа системы счисления!", "error");
		} else {
			result = res.toString(numberSystem2);
			swal("Результат: ", result, "success");
	}
	}
}


function additionNumbers(){
	plusDegree1 = document.getElementById('plusDegree1').value;
	plusDegree2 = document.getElementById('plusDegree2').value;
	plusDegree3 = document.getElementById('plusDegree3').value;

	plusNumber1 = document.getElementById('plusNumber1').value;
	plusNumber2 = document.getElementById('plusNumber2').value;

	plusDegree1 = +plusDegree1;
	plusDegree2 = +plusDegree2;
	plusDegree3 = +plusDegree3;

	if ((plusDegree1 <= 1) || (plusDegree1 >= 37) || (plusDegree2 <= 1) || (plusDegree2 >= 37) || (plusDegree3 <= 1) || (plusDegree3 >= 37)){
		swal("Ошибка!", "Неправильная система счисления!", "error");
	} else {
		plusRes1 = parseInt(plusNumber1, plusDegree1);
		plusRes2 = parseInt(plusNumber2, plusDegree2);

		if (isNaN(plusRes1) || isNaN(plusRes2)){
			swal("Ошибка!", "Проверьте правильность введёного числа!", "error");
		} else {
			plusRes1Res2 = plusRes1 + plusRes2;
			plusResult = plusRes1Res2.toString(plusDegree3);
			swal("Результат: ", plusResult, "success");
		}}
	
}


function minusNumbers(){
	minusDegree1 = document.getElementById('minusDegree1').value;
	minusDegree2 = document.getElementById('minusDegree2').value;
	minusDegree3 = document.getElementById('minusDegree3').value;

	minusNumber1 = document.getElementById('minusNumber1').value;
	minusNumber2 = document.getElementById('minusNumber2').value;

	minusDegree1 = +minusDegree1;
	minusDegree2 = +minusDegree2;
	minusDegree3 = +minusDegree3;

	if ((minusDegree1 <= 1) || (minusDegree1 >= 37) || (minusDegree2 <= 1) || (minusDegree2 >= 37) || (minusDegree3 <= 1) || (minusDegree3 >= 37)){
		swal("Ошибка!", "Неправильная система счисления!", "error");
	} else {
		minusRes1 = parseInt(minusNumber1, minusDegree1);
		minusRes2 = parseInt(minusNumber2, minusDegree2);

		if (isNaN(minusRes1) || isNaN(minusRes2)){
			swal("Ошибка!", "Проверьте правильность введёного числа!", "error");
		} else {
			minusRes1Res2 = minusRes1 - minusRes2;
			minusResult = minusRes1Res2.toString(minusDegree3);
			swal("Результат: ", minusResult, "success");
		}}
	
}


function multiplyNumbers(){
	multiplyDegree1 = document.getElementById('multiplyDegree1').value;
	multiplyDegree2 = document.getElementById('multiplyDegree2').value;
	multiplyDegree3 = document.getElementById('multiplyDegree3').value;

	multiplyNumber1 = document.getElementById('multiplyNumber1').value;
	multiplyNumber2 = document.getElementById('multiplyNumber2').value;

	multiplyDegree1 = +multiplyDegree1;
	multiplyDegree2 = +multiplyDegree2;
	multiplyDegree3 = +multiplyDegree3;

	if ((multiplyDegree1 <= 1) || (multiplyDegree1 >= 37) || (multiplyDegree2 <= 1) || (multiplyDegree2 >= 37) || (multiplyDegree3 <= 1) || (multiplyDegree3 >= 37)){
		swal("Ошибка!", "Неправильная система счисления!", "error");
	} else {
		multiplyRes1 = parseInt(multiplyNumber1, multiplyDegree1);
		multiplyRes2 = parseInt(multiplyNumber2, multiplyDegree2);

		if (isNaN(multiplyRes1) || isNaN(multiplyRes2)){
			swal("Ошибка!", "Проверьте правильность введёного числа!", "error");
		} else {
			multiplyRes1Res2 = multiplyRes1 * multiplyRes2;
			multiplyResult = multiplyRes1Res2.toString(multiplyDegree3);
			swal("Результат: ", multiplyResult, "success");
		}}
}


function divisionNumbers(){
	divisionDegree1 = document.getElementById('divisionDegree1').value;
	divisionDegree2 = document.getElementById('divisionDegree2').value;
	divisionDegree3 = document.getElementById('divisionDegree3').value;

	divisionNumber1 = document.getElementById('divisionNumber1').value;
	divisionNumber2 = document.getElementById('divisionNumber2').value;

	divisionDegree1 = +divisionDegree1;
	divisionDegree2 = +divisionDegree2;
	divisionDegree3 = +divisionDegree3;

	if ((divisionDegree1 <= 1) || (divisionDegree1 >= 37) || (divisionDegree2 <= 1) || (divisionDegree2 >= 37) || (divisionDegree3 <= 1) || (divisionDegree3 >= 37)){
		swal("Ошибка!", "Неправильная система счисления!", "error");
	} else {
		divisionRes1 = parseInt(divisionNumber1, divisionDegree1);
		divisionRes2 = parseInt(divisionNumber2, divisionDegree2);

		if (isNaN(divisionRes1) || isNaN(divisionRes2)){
			swal("Ошибка!", "Проверьте правильность введёного числа!", "error");
		} else {
			divisionRes1Res2 = divisionRes1 * divisionRes2;
			divisionResult = divisionRes1Res2.toString(divisionDegree3);
			swal("Результат: ", divisionResult, "success");
		}}
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