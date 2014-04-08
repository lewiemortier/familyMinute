$(document).on('pagebeforeshow', '#post', function(){
	
	$('#post').css('background-image', 'url(img/post/plain_background_post.png)');
	var height = screen.height;
	var width = screen.width;
	$('#post').css('background-size', width+'px '+height+'px');
	$('#post').css('no-repeat');
	
});