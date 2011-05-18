
var App = {
    load: load
};

function load() {
    jo.load();

    document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
        joEvent.stop(e);
    }, false);

    this.scn = new joScreen(
        new joContainer([
            new joFlexcol([
                this.nav = new joNavbar(),
                this.stack = new joStackScroller()
            ]),
            //this.toolbar = new joToolbar("footer")
        ]).setStyle( {
            position: "absolute", 
            top: "0",
            left: "0",
            bottom: "0",
            right: "0"
        })
    );

    this.nav.setStack(this.stack);
    
    joGesture.backEvent.subscribe(this.stack.pop, this.stack);

    display("menu");
};

function display(id) {
    App.stack.push(joCache.get(id));
};
