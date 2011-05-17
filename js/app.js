jo.load();

var App = (function() {
    var cssnode;

    function init() {
        cssnode = joDOM.applyCSS(".htmlgroup { background: #fff; }");

        var menu, list;
        menu = new joCard([
            list = new joMenu([
                {title: 'Title', id: 'title' }
                ])
            ]).setTitle("AINotify");
    };

    function click() {
        stack.push(page);
    };

    function back() {
        stack.pop();
    };

    return {
        "init": init,
        "getStack": function() { return stack; },
    };
}());
