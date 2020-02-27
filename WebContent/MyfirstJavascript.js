 var but = window.document.getElementById("myButton");
 but.addEventListner("click",sayHallowfun,false);
 
 function sayHallowfun(event){
	 window.alert("I was clicked");
	 return;
 }