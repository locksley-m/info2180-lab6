$(document).ready(function(){
	
	$("#submit_button").on("click", function(){
		event.preventDefault();
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
			   $("#result").html(result);
			});
	    });
	    
	    
	    $("#all_def").on("click", function(){
		event.preventDefault();
	  $.ajax({
            method: "GET",
            url: "request.php",
            dataType: "xml",
            data: { all: true },
            
            statusCode: 
		     { 404: function(){
             alert( "Page not found" );
             }
		    }
		    
        }).done(function(xml){
        	
        	var def_arr = $(xml).find("definitions");
        	var terms = $(def_arr).children();
        	var ol = $("<ol>");
        	$(terms).each(function(){
        		var li = $("<li>");
        		var name = $(this).find('name').text();
        		var definition = $(this).find('definition').text();
        		var author = $(this).find('author').text();
        		$(li).append("<h3>"+name.toUpperCase()+"</h3>");
        		$(li).append("<p>"+definition+"</h3>");
        		$(li).append("<p>- "+author+"</p>");
        		$(ol).append(li);
        	});
        	$("#result").html(ol);
        });
	});

});