
joCache.set("events", function() {
    var card = new joCard([
        new joLabel("Events"),
        new joDivider(),
        new joLabel("Tag  | Status {report | notified | pass}"),
        new joLabel("Tag-B  | report"),
        new joLabel("Tag-C  | notified"),
        new joLabel("Tag-D  | pass"),

    ]);

    return card;
});
