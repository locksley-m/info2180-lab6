$(document).ready(function(){
	
	$("button").on("click", function(){
		
	$.ajax({
		  data: { q:"definition" },
		  url: "request.php" ,
		  method: "GET" ,
		   
		  
		  statusCode: 
		  { 404: function(){
             alert( "Page not found" );
             }
		   }	
		 
		}).done( function (result){			
			  alert(result);
			});
	});

});