$(document).on('pagebeforeshow', '#family', function(){
	
	$('#family').css('background-image', 'url(img/family/background.png)');
	var height = screen.height;
	var width = screen.width;
	$('#family').css('background-size', width+'px '+height+'px');
	$('#family').css('no-repeat');
	
});