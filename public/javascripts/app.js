var app = App = function() {};

app.prototype.init = function () {
    this.console();
};

app.prototype.console = function () {
    console.log('========== Console Ready ==========');
};

$(document).ready(function () {
    var app = new App();
    app.init();
});