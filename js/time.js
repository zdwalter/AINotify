
joCache.set("time", function() {
    var card = new joCard([
        new joGroup([
            //new joTitle("When"),
            new joLabel("From"),
            new joInput("time_start").setData("Now"),
            new joLabel("To"),
            new joInput("time_end").setData("2 Hours later"),
            new joFlexrow([
                new joButton("Save").selectEvent.subscribe(function() { 
                    App.scn.alert("saved");
                    display("events");
                }),
            ])
        ])
    ]);

    card.setTitle("Tag");

    return card;
});
