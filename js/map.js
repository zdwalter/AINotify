
joCache.set("map", function() {
    var path = "http://maps.google.com/maps/api/staticmap?center=";
    var card = new joCard([
        new joView("<img id='static_map' src='' />"),
        new joLabel("Where you are now")
        ]);

    card.setTitle("Map");
    //TODO: load map

    navigator.geolocation.getCurrentPosition(function (position) {
        var location = "" + position.coords.latitude + "," + position.coords.longitude;
        //path += location + "&zoom=" + zoom;
        path += "&size=250x250&markers=color:red|label:P|";
        //path += "&size=250x250&maptype=" + map + "&markers=color:       red|label:P|";
        path += location + "&sensor=false";

        joDOM.get('static_map').src = path;
        console.log('got location:' + path);
    }, function () {
        joDOM.get('static_map').src = "css/gpsfailed.png";
    });

    return card;
});
