
// Embeded javascript 

function collapsible() {
	var x = document.getElementById("myDIV");
	var y = document.getElementById("q");
	if (x.style.display === "block") {
		x.style.display = "none";
		y.style.display = "block";
	} 
	else {
		x.style.display = "block";
		y.style.display = "none";
	}
}
		
