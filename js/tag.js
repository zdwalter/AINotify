
joCache.set("tag", function() {
    var card = new joCard([
        new joGroup([
            //new joTitle("When"),
            new joLabel("From"),
            new joInput("time_start").setData(joTime.timestamp()),
            new joLabel("To"),
            new joInput("time_end").setData(joTime.timestamp() + (HOUR*2)),
            new joDivider(),
            //new joTitle("What"),
            new joLabel("What to notify"),
            new joInput("tag"),
            new joFlexrow([
                new joButton("Save").selectEvent.subscribe(function() { App.scn.alert("saved") }),
                new joBackButton("Cancel")
            ])
        ])
    ]);

    card.setTitle("Tag");

    return card;
});
