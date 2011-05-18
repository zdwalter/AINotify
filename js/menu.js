
joCache.set("menu", function() {
    var card = new joCard([
        new joMenu([
            { title: 'New', id: 'map' },
            { title: 'Check', id: 'events' }
            ]).selectEvent.subscribe(function(id) {
                    display(id);
                })
    ]);

    card.setTitle("AINotify");

    return card;
});
