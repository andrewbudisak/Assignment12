$(document).ready(function(){

	var newVariable;

	$.ajax({
		// an ajax object - aka a collection of properties and values
		// everything after the ? is a query parameter
		url: "https://api.openweathermap.org/data/2.5/find?",
		// different types of AJAX requests
		type: "GET",
		// could be JSON or XML (most likely JSON)
        dataType: "JSON",
        // break up query parameters
        data: {
        	q: "New York",
        	units: "imperial",
        	appid: "8fe05ac6547cefa20b40af1273a89ef3"
        },
        success: function(data) {
            // print all the JSON to the console
            console.log(data);
            console.log(data.list[0].main.temp);
            $("#myButton").html("The temp is: " + data.list[0].main.temp);
             

        },	

        error: function(data, textStatus, errorThrown) {
        	console.log("whomp, whomp");
            //Do Something to handle error
            console.log(errorThrown);
        }	
	})

})


$(document).ready(function(){

	var newVariable;

	$.ajax({
		// an ajax object - aka a collection of properties and values
		// everything after the ? is a query parameter
		url: "https://api.openweathermap.org/data/2.5/find?",
		// different types of AJAX requests
		type: "GET",
		// could be JSON or XML (most likely JSON)
        dataType: "JSON",
        // break up query parameters
        data: {
        	q: "Los Angeles",
        	units: "imperial",
        	appid: "8fe05ac6547cefa20b40af1273a89ef3"
        },
        success: function(data) {
            // print all the JSON to the console
            console.log(data);
            console.log(data.list[0].main.temp);
            $("#myButton2").html("The temp is: " + data.list[0].main.temp);
             

        },	
        
        error: function(data, textStatus, errorThrown) {
        	console.log("whomp, whomp");
            //Do Something to handle error
            console.log(errorThrown);
        }	
	})

})
