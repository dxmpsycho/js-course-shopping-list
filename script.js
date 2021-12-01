var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	li.appendChild(createButton());
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListClasses(event){
	console.log(event.target)
	event.target.classList.toggle("done")
}

function deleteParent(event){
	event.target.parentElement.remove()
}

function createButton(){
	var listButton = document.createElement("button")
	listButton.appendChild(document.createTextNode("Delete"))
	listButton.addEventListener("click",deleteParent)
	return listButton
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(element){
	element.addEventListener("click",toggleListClasses)	
	element.appendChild(createButton())	
});