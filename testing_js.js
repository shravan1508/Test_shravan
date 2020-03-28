var x = document.getElementById("inp");
var butt = document.querySelector("button");
var ul = document.querySelector("ul");

function addlistitem(event) {
	if((event.type == "keypress" && event.which ==13) || (event.type=="click")){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(inp.value));
	ul.appendChild(li);
	inp.value="";
	}
}

butt.addEventListener("click",addlistitem);
x.addEventListener("keypress",addlistitem);