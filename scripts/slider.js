var currentImage = 1;
var totalImages = 5;

function switchImage(image) {
 	$("#slider img")[0].src = "images/large-house" + image + ".jpg";
 	$(".pagination").css("background-color", "transparent");
	$(".pagination")[image - 1].style.backgroundColor = "white";
	currentImage = image;
}

window.setInterval(function() {
 	if(currentImage + 1 == totalImages)
 	 currentImage = 1;
 	else
  	currentImage++;

	 switchImage(currentImage);
}, 5000);