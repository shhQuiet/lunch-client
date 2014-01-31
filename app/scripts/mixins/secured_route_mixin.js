LunchClient.SecuredRouteMixin = Ember.Mixin.create({
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
                elem.popover('destroy');
            }, 5000);

            elem.focus();
        }
    }
});
