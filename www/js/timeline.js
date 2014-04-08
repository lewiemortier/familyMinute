$(document).on('pagebeforeshow', '#timeline', function(){

	$('#timeline').css('background-image', 'url(img/timeline/background.png)');
	var height = screen.height;
	var width = screen.width;
	$('#timeline').css('background-size', width+'px '+height+'px');
	$('#timeline').css('no-repeat');

	/*
	$('#playButton').click(function() {
		var myVideo=document.getElementById("video1");

		if (myVideo.paused) {
			myVideo.play();
		}
		else {
			myVideo.pause();
		}
	});
*/
});