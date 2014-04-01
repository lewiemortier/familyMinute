$(document).on('pagebeforeshow', '#sign-in', function(){
	console.log("button clicked");
	$('#signIn').on('click',function(){
		
		$.mobile.changePage("#home");
	});
});