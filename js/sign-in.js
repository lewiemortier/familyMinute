$(document).on('pagebeforeshow', '#signIn', function(){
	
	$('#signIn').css('background-image', 'url(img/background.png)');
	var height = screen.height;
	var width = screen.width;
	$('#signIn').css('background-size', width+'px '+height+'px');
	$('#signIn').css('no-repeat');
	

	$('#signIn').on('click',function(){
		$('#loginCredentials').fadeIn(500);
		$('#initial').hide();
	});

	$('#loginCredentials #submit').on('click', function(e){
		e.preventDefault();
		//check fields
		var credentialsOk = true;
		if ($('#username').val() == ""){
			credentialsOk = false;
		}

		if ($('#password').val() == ""){
			credentialsOk = false;
		}

		if (credentialsOk == false){
			//show error message
			alert("Unable to login");
			$('#username').val("");
			$('#password').val("");

		}
		else {
			console.log('go to page home');
			//go to home page
			// $.mobile.changePage("home.html");
			window.location.href = "home.html";
		}

	});
	//go to sign up
	$('#navigationButtons .sign-up').on('click',function(){
		$.mobile.changePage("sign-up.html");
		// asda
	});
	
});