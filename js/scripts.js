jQuery.noConflict();
jQuery(function($) {
	console.log('being read');


	$(window).scroll(function() {
        //var scroll = $(window).scrollTop();
            var scroll = window.pageYOffset,
            width = parseInt(jQuery(window).width()) >= 980;

        if ((scroll >= 50) && (width)) {
            $(".header-wrapper").addClass("small");
            $("#block-menu-menu-menu-1, #block-menu-menu-menu-2").addClass("small");
        } else {
            $(".header-wrapper").removeClass("small");
            $("#block-menu-menu-menu-1, #block-menu-menu-menu-2").removeClass("small");
        }
    });

		$("a.toscroll").on('click',function(e) {
		    var url = e.target.href;
		    var hash = url.substring(url.indexOf("#")+1);
		    $('html, body').animate({
		        scrollTop: $('#'+hash).offset().top
		    }, 500);
		    return false;
		});


                $('.mobile-nav').on('click', function(){
                   $('#mainNav').toggleClass('active');
                   console.log('clicked');
                });
                jQuery('#mainNav').on('click', function(){
                    //console.log('clicked');
                    jQuery(this).removeClass('active');
                });
		//if (parseInt(jQuery(window).width()) >= 1024) {
		  //moving background block
		//$('.main').parallax(['20%'], -0.2);

	  //}
    if($('.card.two').length > 0){
        newsFeed();
    }

});
function newsFeed(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a9e3fc2ec88c4d0488941ebf7750e740';

    var req = new Request(url);
    console.log('this');
    fetch(req)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.status == 'ok'){
                var articles = data.articles;
                articles.forEach(function (dataNews){
                    console.log(dataNews);
                });
            }
        })
        .catch(error => console.log('error is', error));
}
function initMap() {
    var uluru = {lat: 41.743369, lng: -87.570702};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru,
      mapTypeId: 'terrain',
      styles: [
          {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{ "color": "#FFF" }]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{color: '#FFF'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{color: '#FFF'}]
          },
          {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#FFF'}]
          }
      ]
    });
     var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);

    //var defaultBounds = new google.maps.LatLngBounds(
    //new google.maps.LatLng(-33.8902, 151.1759),
    //new google.maps.LatLng(-33.8474, 151.2631));

    var input = document.getElementById('searchTextField');

    var searchBox = new google.maps.places.SearchBox(input, {
      bounds: defaultBounds
    });
    //var marker = new google.maps.Marker({
      //position: uluru,
      //map: map
    //});
    //map.setTilt(65);

}