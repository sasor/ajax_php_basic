function get() {
	try {
		r = new XMLHttpRequest();	
	} catch (e) {
		r= false;	
	}
	return r;
}

xhr = get();

function begin() {
	if(xhr.readyState == 4 || xhr.readyState == 0)
	{
		banda = document.getElementById("js-request").value;	
		xhr.open("GET", "/server.php?banda=" + banda, true);
		xhr.onreadystatechange = watching;
		xhr.send(null);
	}
	else 
	{
		setTimeout('begin()',3000);
	}
}

function watching() {
	if(xhr.readyState == 4)
	{
		if(xhr.status == 200)
		{
			response = xhr.responseXML.documentElement.firstChild.data;
			document.getElementById("js-response").innerHTML = response;
			setTimeout('begin()',1000);
		}	
	}
}

