$(document).on('pagebeforeshow', '#alert', function(){
	$('#alert').css('background-image', 'url(img/alert_systeam.png)');
	var height = screen.height;
	var width = screen.width;
	$('#alert').css('background-size', width+'px '+height+'px');
	$('#alert').css('no-repeat');
});