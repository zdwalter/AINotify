
joCache.set("tag", function() {
    var tag = new joInput("tag").setData('anything');
    var card = new joCard([
        new joGroup([
            new joLabel("What interests you"),
            tag,
            new joFlexrow([
                new joButton("Report").selectEvent.subscribe(function() { 
                    App.scn.alert("report sent:\n"+tag.getData()+"\n@#{Location}\n@#{Time}"); 
                    }),
                new joButton("Notify me!").selectEvent.subscribe(function() {
                    display("time");
                }),
            ])
        ])
    ]);

    card.setTitle("Tag");

    return card;
});
