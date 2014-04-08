$(document).on('pagebeforeshow', '#signUp', function(){

	$('#signUp').css('background-image', 'url(img/signup/signupBackground.png)');
	var height = screen.height;
	var width = screen.width;
	$('#signUp').css('background-size', width+'px '+height+'px');
	$('#signUp').css('no-repeat');

	$('#submit').on('click',function(e){
		e.preventDefault();

		var valuesOk = false;

		// equal password
		if($('#name').val() !== "" && $('#fname').val() !== "" && $('#bday').val() !== "" && $('#email').val() !== "" && $('#address').val() !== "" && $('#pwd').val() !== "" && $('#address').val() !== ""){
			if ($('#pwd').val() == $('#pwd2').val()){
				window.location.href = "home.html";
			}else{
				alert("Both passwords must be the same!");
				$('#pwd').val("");
				$('#pwd2').val("");
			}
		}else{
			alert("Empty fields!");
		}
	});

	$('input:required').on('keyup', function(){
		
	});
});