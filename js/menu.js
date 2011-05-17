
joCache.set("menu", function() {
    var card = new joCard([
        new joMenu([
            { title: 'Map', id: 'map' },
            { title: 'Tag', id: 'tag' }
            ]).selectEvent.subscribe(function(id) {
                App.stack.push(joCache.get(id));
                })
    ]);

    card.setTitle("AINotify");

    return card;
});
