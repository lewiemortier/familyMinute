$(document).on('pagebeforeshow', '#camera', function(){
	
	$('#camera').css('background-image', 'url(img/pictureshare.png)');
	var height = screen.height;
	var width = screen.width;
	$('#camera').css('background-size', width+'px '+height+'px');
	$('#camera').css('no-repeat');
	
});