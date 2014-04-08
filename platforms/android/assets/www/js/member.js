$(document).on('pagebeforeshow', '#member', function(){
	
	$('#member').css('background-image', 'url(img/member_background.png)');
	var height = screen.height;
	var width = screen.width;
	$('#member').css('background-size', width+'px '+height+'px');
	$('#member').css('no-repeat');

});