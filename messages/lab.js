var request = new XMLHttpRequest();

function parse() {

request.open("GET", "data.json", true);
request.onreadystatechange = callme;
request.send(null);

function callme () {
		data = request.responseText;
		string = JSON.parse(data);
    		document.getElementById("messages").innerHTML = string[0].content
    		document.getElementById("messages").innerHTML += string[0].username + '<br/>'
    		document.getElementById("messages").innerHTML += string[1].content
    		document.getElementById("messages").innerHTML += string[1].username + '<br/>'	
}	
}