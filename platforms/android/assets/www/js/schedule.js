$(document).on('pagebeforeshow', '#schedule', function(){
	
	$('#schedule').css('background-image', 'url(img/schedule.png)');
	var height = screen.height;
	var width = screen.width;
	$('#schedule').css('background-size', width+'px '+height+'px');
	$('#schedule').css('no-repeat');

});