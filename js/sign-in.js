$(document).on('pagebeforeshow', '#signIn', function(){
	
	$('#navigationButtons .sign-in').on('click',function(){
		$(".top").animate({'height':'40%'},500);
		$(".photo").animate({'top':'25%'},500);
		$(".slogan").animate({'top':'50%'},500);
		$("#navigationButtons .sign-in").animate({'top':'60%'},500);
		$(".sign-up").animate({'top':'60%'},500);
		$(".bottom").animate({'height':'60%'},500);
		$('#initial').fadeOut(500);
		$('#loginCredentials').fadeIn(500);
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
	});
	
});