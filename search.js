$(document).ready(function(){
	
	$("#search").on("submit", function(){
		$.ajax({
		  url: "https://info2180-lab-6-loxli.c9users.io/request.php/request.php?q=definition",
		  type: "GET"
		},
		  success: function(result){
			  alert(""+result);
		  }
		);
		
		
	});



});