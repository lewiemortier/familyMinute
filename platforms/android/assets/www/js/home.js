$(document).on('pagebeforeshow', '#home', function(){
	
	$('#home').css('background-image', 'url(img/home/profilepage.png)');
	var height = screen.height;
	var width = screen.width;
	$('#home').css('background-size', width+'px '+height+'px');
	$('#home').css('no-repeat');

});