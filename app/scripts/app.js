var LunchClient = window.LunchClient = Ember.Application.create({
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

LunchClient.SecuredRoute = Ember.Route.extend({
    beforeModel: function(transition) {
        var auth = LunchClient.get('auth'),
            hint, container, pulseCount = 5,
            elem;

        if (auth) {
            console.log('auth:' + auth);
        } else {
            transition.abort();

            elem = Ember.$('#login-container');

            elem.popover({
                title: 'Login Required',
                content: 'To do that, you\'ll need to login here!',
                placement: 'bottom',
                trigger: 'manual'
            });

            elem.popover('show');
            setTimeout(function() {
                elem.popover('hide');
            }, 5000);

            elem.focus();
        }
    }
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
