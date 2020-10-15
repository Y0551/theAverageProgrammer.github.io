
// Embeded javascript 

function toggleOnOff(num) {
	
	
	var x = document.getElementById("threeDots"+num);
	var y = document.getElementById("restOfParagraphs"+num);
	
	if (x.style.display === "block" || x.style.display === "") {
		x.style.display = "none";
		y.style.display = "block";
	} 
	else {
		x.style.display = "block";
		y.style.display = "none";
	}
}
		
