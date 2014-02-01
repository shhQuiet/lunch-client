LunchClient.ApplicationController = Ember.Controller.extend({
    username: '',
    password: '',
    loggedIn: false,
    actions: {
        login: function() {
            var self = this;
            var auth = "Basic %@".fmt(btoa("%@:%@".fmt(self.get('username'), self.get('password'))));

            // console.log('auth:' + auth);
            Ember.$.ajax({
                type: "GET",
                url: LunchClient.get('serverHost') + "/check_auth",
                headers: {
                    Authorization: auth
                }
            }).done(function(data, textStatus, jqXHR) {
                console.log(textStatus);
                LunchClient.set('auth', auth);
                Ember.$.ajaxPrefilter(function(options, oriOpt, jqXHR) {
                    jqXHR.setRequestHeader("Authorization", auth);
                });
                // LunchClient.ApplicationAdapter.reopen({
                //     headers: {
                //         Authorization: auth
                //     }
                // });

                self.set('loggedIn', true);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var elem = Ember.$('#login-container');

                elem.popover({
                    title: 'Login Required',
                    content: 'Sorry, your credentials didn\'t check out.  Please try again.',
                    placement: 'bottom',
                    trigger: 'manual'
                });
                elem.popover('show');
                setTimeout(function() {
                    elem.popover('destroy');
                }, 5000);

            });
        },
        logout: function() {
            this.set('loggedIn', false);
            this.set('password', '');
            // LunchClient.set('auth', null);
        },
        confirmTransition: function() {
            var trans = LunchClient.get('pendingTransition');
            if (trans) {
                trans.retry();
            }
        },
        abortTransition: function() {
            LunchClient.set('pendingTransition', null);
        }
    }
});
