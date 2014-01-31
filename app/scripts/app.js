var LunchClient = window.LunchClient = Ember.Application.create({
    serverHost: "http://localhost:3000",
    pendingTransition: null,
    auth: null
});

function backAndForth(count, selector, config1, config2, inoutTime, pauseTime) {

    var item = Ember.$(selector);

    function pulse(next) {
        item.animate(config1, inoutTime, 'swing', function() {
            setTimeout(function() {
                item.animate(config2, inoutTime, 'swing', function() {
                    if (next) {
                        next();
                    }
                });
            }, pauseTime);
        });
    }

    function repeat() {
        if (--count < 0) {
            return;
        }
        pulse(repeat);
    }

    repeat();
}

/* Order and include as you please. */
require('scripts/mixins/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
