$(document).on('pagebeforeshow', '#signUp', function(){
	//check variables
	var valuesOk = true;
	if ($('#pwd').val() != $('#pwd2').val()){
		valuesOk = false;
	}

	$('#submit').on('click',function(e){
		e.preventDefault();
		//values are ok
		if (valuesOk){
			//go to home page
			$.mobile.changePage("home.html");
		}
		else {
			alert("Both passwords must be the same!");
			$('#pwd').val("");
			$('#pwd2').val("");
		}
	});
});