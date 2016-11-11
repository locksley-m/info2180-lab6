$(document).ready(function(){
	
	$("form").on("submit", function(){
		event.preventDefault();
		console.log($("#input_request").val())
	$.ajax({
		  
		  url: "request.php",
		  method: "GET",
		  data: { q:$("#input_request").val().toLowerCase() }, 
		  
		  statusCode: 
		  { 404: function(){
             alert( "Page not found" );
             }
		   }	
		 
		}).done( function (result){	
			   console.log(result);
			   $("#result").html(result);
			});
	});

});