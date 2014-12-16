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


aCall("GET", "myStory.txt");
