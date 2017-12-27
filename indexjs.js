var userNumber;
var numberSystem, numberSystem2;
var res, result;

function resultNumber(){
	userNumber = document.getElementById('num').value;
	numberSystem = document.getElementById('numberSystem').value;
	numberSystem2 = document.getElementById('numberSystem2').value;
	
	userNumber = +userNumber;
	numberSystem = +numberSystem;
	numberSystem2 = +numberSystem2;
	
	res = parseInt(userNumber, numberSystem);
	result = res.toString(numberSystem2);
	
	swal(result);
}