var list;
var span;
var text;
var close;
var newLi;
var choose;
var userInput;
var txt;

list = document.getElementsByTagName('li');
close = document.getElementsByClassName('close');
choose = document.querySelector('ul');

for(var i = 0; i < list.length; i++){
  span = document.createElement("SPAN");
  text = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(text);
  list[i].appendChild(span);
}

for(var i = 0; i < close.length; i++){
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  }
}

choose.addEventListener('click', function(event) {
	if(event.target.tagName == 'LI') {
		event.target.classList.toggle('checked');
	}
},false);

function addTask(){
  newLi = document.createElement('li');
  userInput = document.getElementById('task').value;
  txt = document.createTextNode(userInput);
  newLi.appendChild(txt);
  if(userInput === ''){
   swal("Ошибка!", "Поле не может быть пустым!", "error");
 } else{
  document.getElementById('list').appendChild(newLi);
}

document.getElementById('task').value = "";

span = document.createElement('span');
text = document.createTextNode("\u00D7");

span.className = 'close';
span.appendChild(text);
newLi.appendChild(span);

for(var i = 0; i < close.length; i++){
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = 'none';
  }
}
}