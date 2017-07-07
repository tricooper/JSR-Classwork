// app.js
$(function() {
  // DOM is now ready
  	_500px.init({
    sdk_key: '18baf7d35ef0f349a2c6be68071f2508608c9dd0'
  });

  // When a successful login to 500px is made, they fire off the 'authorization_obtained' event
  		_500px.on('authorization_obtained', function() {
  			$('.sign-in-view').hide(); 
  			$('.image-results-view').show(); 
  			if(navigator.geolocation) {
  				navigator.geolocation.getCurrentPosition(function(position){
  					console.log(position);
  					var lat = position.coords.latitude; 
  					var long = position.coords.longitude; 
  					console.log(lat, long);
  					var radius = "25mi";
  					var searchOptions = {
  						geo: lat + "," + long + "," + radius,
  						only: "LandScapes",
  						image_size: 3,
  						rpp: 28,
  						sort: "highest_rating"
  					}

        _500px.api('/photos/search', searchOptions, function (response) {
                    console.log(response);
                    if(response.data.photos.length === 0){
                    	alert('no photos :(');
                    } else {
                    	handleResponseSuccess(response);


                    }
  				});
        });

  			} else {
  				alert('navigator not available');
  			}
  
    
  	});

  	function handleResponseSuccess (response) {
  		var allPhotos = response.data.photos;
 	$.each(allPhotos, function (){
              var elm = $('<img>').attr('src', this.image_url).addClass('image');
              $('.images').append(elm);
          });
  	}

  $('#login').click(function() {
  	_500px.login();

	});

  _500px.getAuthorizationStatus();


  
});