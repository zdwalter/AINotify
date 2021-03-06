
joCache.set("map", function() {
    var size="100%";
    var buttonGroup = new joGroup([
            //TODO: use joGesture
            //TODO: replace with image,
            //TODO: set location to overlay on map
            new joFlexrow([
                new joFlexcol([
                    new joFlexrow([
                        new joButton("<<"),
                        new joButton("^"),
                        new joButton(">"),
                        ]),
                    new joFlexrow([
                        new joButton("+"),
                        new joButton("V"),
                        new joButton("-"),
                        ]),
                    ]),
                    new joFlexcol([
                        new joButton("What").selectEvent.subscribe(function() {
                            display("tag");
                            }),
                        new joFlexrow([
                            new joButton("@"),
                            new joButton("."),
                            ]),
                        ]),

                ]),
            ]);

    var card = new joCard([
        new joGroup([
            new joLabel("Where"),
            new joView("<div id='map_canvas' style='height: 100%; width: 100%; align: center'></div>").setStyle({ height: "160px"}),

            buttonGroup,
            ])
        ]);

    card.setTitle("Map");
    //TODO: load map

    if (navigator.geolocation) {
        var path = "http://maps.google.com/maps/api/staticmap?center=";
        navigator.geolocation.getCurrentPosition(function success(position) {
            map_init();
            var initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            //contentString = "Location found using W3C standard";
            App.map.setCenter(initialLocation);
            //infowindow.setContent(contentString);
            App.infowindow.setPosition(initialLocation);
            App.infowindow.open(App.map);
        }, function error() {
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
           

