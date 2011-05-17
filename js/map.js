
joCache.set("map", function() {
    var path = "http://maps.google.com/maps/api/staticmap?center=";
    var card = new joCard([
        new joView("<div id='map_canvas' style='height: 320px; width: 320px;'></div>"),
        new joLabel("Where you are now")
        ]);

    card.setTitle("Map");
    //TODO: load map

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            map_init();
            var initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            //contentString = "Location found using W3C standard";
            App.map.setCenter(initialLocation);
            //infowindow.setContent(contentString);
            App.infowindow.setPosition(initialLocation);
            App.infowindow.open(App.map);
            //var location = "" + position.coords.latitude + "," + position.coords.longitude;
            ////path += location + "&zoom=" + zoom;
            //path += "&size=320x320&markers=color:red|label:P|";
            ////path += "&size=250x250&maptype=" + map + "&markers=color:       red|label:P|";
            //path += location + "&sensor=false";

            //joDOM.get('static_map').src = path;
            //console.log('got location:' + path);
        }, function () {
            map_init();
            var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
            App.initialLocation = newyork;
            App.map.setCenter(App.initialLocation);
            App.infowindow.setPosition(App.initialLocation);
            App.infowindow.open(App.map);
            //joDOM.get('map_canvas').innerHTML = "fail to load location";
        });
    }

    return card;
});

function map_init() {
var myOptions = {
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
App.map = new google.maps.Map(joDOM.get("map_canvas"), myOptions);

App.infowindow = new google.maps.InfoWindow();
};
           

