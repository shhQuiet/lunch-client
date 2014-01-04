LunchClient.ApplicationController = Ember.Controller.extend({
    username: '',
    password: '',
    loggedIn: false,
    actions: {
        login: function() {
            var auth = btoa(this.get('username') + ':' + this.get('password'));
            console.log('auth:' + auth);
            LunchClient.set('auth', auth);
            LunchClient.ApplicationAdapter.headers = {
                'Authorization': auth
            };
            this.set('loggedIn', true);
        },
        logout: function() {
            this.set('loggedIn', false);
            this.set('password', '');
            LunchClient.set('auth', null);
        }
    }
});
