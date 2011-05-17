
joCache.set("map", function() {
    var path = "http://maps.google.com/maps/api/staticmap?center=";
    var card = new joCard([
        new joView("<div id='map_canvas'></div>"),
        new joLabel("Where you are now")
        ]);

    card.setTitle("Map");
    //TODO: load map

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var myOptions = {
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            App.map = new google.maps.Map(joDOM.get("map_canvas"), myOptions);
            App.initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            App.infowindow = new google.maps.InfoWindow();
            //contentString = "Location found using W3C standard";
            App.map.setCenter(App.initialLocation);
            //infowindow.setContent(contentString);
            App.infowindow.setPosition(App.initialLocation);
            App.infowindow.open(App.map);
            //var location = "" + position.coords.latitude + "," + position.coords.longitude;
            ////path += location + "&zoom=" + zoom;
            //path += "&size=320x320&markers=color:red|label:P|";
            ////path += "&size=250x250&maptype=" + map + "&markers=color:       red|label:P|";
            //path += location + "&sensor=false";

            //joDOM.get('static_map').src = path;
            //console.log('got location:' + path);
        }, function () {
        joDOM.get('map_canvas').innerHTML = "fail to load location";
        });
    }

    return card;
});
