	  var map;
      var marker;
      function initMap() {
      
      var MBTAlocs = [
      	{name: "South Station", myLatLng: {lat: 42.352271, lng: -71.05524200000001}},
      	{name: "Andrew", myLatLng: {lat: 42.330154, lng: -71.057655}},
      	{name: "Porter Square", myLatLng: {lat: 42.3884, lng: -71.11914899999999}},
      	{name: "Harvard Square", myLatLng: {lat: 42.373362, lng: -71.118956}},
      	{name: "JFK/UMass", myLatLng: {lat: 42.320685, lng: -71.052391}},
      	{name: "Savin Hill", myLatLng: {lat: 42.31129, lng: -71.053331}},
      	{name: "Park Street", myLatLng: {lat: 42.35639457, lng: -71.0624242}},
      	{name: "Broadway", myLatLng: {lat: 42.342622, lng: -71.056967}},
      	{name: "North Quincy", myLatLng: {lat: 42.275275, lng: -71.029583}},
      	{name: "Shawmut", myLatLng: {lat: 42.29312583, lng: -71.06573796000001}},
      	{name: "Davis", myLatLng: {lat: 42.39674, lng: -71.121815}},
      	{name: "Alewife", myLatLng: {lat: 42.395428, lng: -71.142483}},
      	{name: "Kendall/MIT", myLatLng: {lat: 42.36249079, lng: -71.08617653}},
      	{name: "Charles/MGH", myLatLng: {lat: 42.361166, lng: -71.070628}},
      	{name: "Downtown Crossing", myLatLng: {lat: 42.355518, lng: -71.060225}},
      	{name: "Quincy Center", myLatLng: {lat: 42.251809, lng: -71.005409}},
      	{name: "Quincy Adams", myLatLng: {lat: 42.233391, lng: -71.007153}},
      	{name: "Ashmont", myLatLng: {lat: 42.284652, lng: -71.06448899999999}},
      	{name: "Wollaston", myLatLng: {lat: 42.2665139, lng: -71.0203369}},
      	{name: "Fields Corner", myLatLng: {lat: 42.300093, lng: -71.061667}},
      	{name: "Central Square", myLatLng: {lat: 42.365486, lng: -71.103802}},
      	{name: "Braintree", myLatLng: {lat: 42.2078543, lng: -71.0011385}}    	
      	];
      	
      	var alewifeAshmontLocs = [
      		{lat: 42.395428, lng: -71.142483}, //Alewife
      		{lat: 42.39674, lng: -71.121815}, // Davis
      		{lat: 42.3884, lng: -71.11914899999999}, // Porter
      		{lat: 42.373362, lng: -71.118956}, // Harvard
      		{lat: 42.365486, lng: -71.103802}, // Central
      		{lat: 42.36249079, lng: -71.08617653}, // Kendall
      		{lat: 42.361166, lng: -71.070628}, // Charles
      		{lat: 42.35639457, lng: -71.0624242}, // Park St
      		{lat: 42.355518, lng: -71.060225}, // Downtown Crossing
      		{lat: 42.352271, lng: -71.05524200000001}, // South Station
      		{lat: 42.342622, lng: -71.056967}, // Broadway
      		{lat: 42.330154, lng: -71.057655}, // Andrew
      		{lat: 42.320685, lng: -71.052391}, // JFK
      		{lat: 42.31129, lng: -71.053331}, // Savin Hill
      		{lat: 42.300093, lng: -71.061667}, // Fields Corner
      		{lat: 42.29312583, lng: -71.06573796000001}, // Shawmut
      		{lat: 42.284652, lng: -71.06448899999999} // Ashmont
      	];
      
      	var JFKBrainLocs = [
      		{lat: 42.320685, lng: -71.052391}, // JFK
      		{lat: 42.275275, lng: -71.029583}, // North Quincy
      		{lat: 42.2665139, lng: -71.0203369}, // Wollaston
      		{lat: 42.251809, lng: -71.005409}, // Quincy Center
      		{lat: 42.233391, lng: -71.007153}, // Quincy Adams
      		{lat: 42.2078543, lng: -71.0011385} // Braintree
      	];
      	
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.3519, lng: -71.0551},
          zoom: 12
        });
        
        var icon = {
   			 url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/MBTA.svg/1024px-MBTA.svg.png", // url
    		 scaledSize: new google.maps.Size(15, 15), // scaled size

        };
        
       	for (var i =0; i < MBTAlocs.length; i++) {
       	    	marker = new google.maps.Marker({
       	    		position: MBTAlocs[i].myLatLng, 
       	    		map: map, 
       	    		title: MBTAlocs[i].name,
       	    		icon: icon
       	    	});
       	    	marker.setMap(map);
       	}
       	   
  		var alewifeAshmont = new google.maps.Polyline({
   		 path: alewifeAshmontLocs,
    	 geodesic: true,
    	 strokeColor: '#FF0000',
   		 strokeOpacity: 1.0,
   		 strokeWeight: 2
  		});
  		
  		var JFKBrain = new google.maps.Polyline({
   		 path: JFKBrainLocs,
    	 geodesic: true,
    	 strokeColor: '#FF0000',
   		 strokeOpacity: 1.0,
   		 strokeWeight: 2
  		});

 		alewifeAshmont.setMap(map);
 		JFKBrain.setMap(map);
       	
}