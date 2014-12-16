Simple-Ajax-
============

Ajax is a very powerful concept to access data dynamically. Honestly it's becoming the standard in terms of the web 2.0. I created a very light weight code to send/receive data via Ajax with one function and 2 parameters.

<script>

  function aCall(x, y){

	var ajaxQuester;
	if(window.XMLHttpRequest){
	ajaxQuester = new XMLHttpRequest();
	}else{
	ajaxQuester = new ActiveXObject('Microsoft.XMLHTTP');
	}

	ajaxQuester.onreadystatechange = function caller(){
		
		if(ajaxQuester.readyState == 4 && ajaxQuester.status == 200){
		document.getElementById('connect').innerHTML = ajaxQuester.responseText;}
		
	}

	ajaxQuester.open(x, y, true);
	ajaxQuester.send(null);
	setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	

}

/*Just copy & paste the function aCall() for any DOM element you want to use and set the params with either the GET or POST method and the name of the file*/
aCall("GET", "myStory.txt");


</script>
