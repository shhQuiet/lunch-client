LunchClient.UsersNewController = Ember.Controller.extend({
    actions: {
        save: function () {
            var self = this,
                days,
                username = this.get('username'),
                password = this.get('password');

            var mdl = {
                username: username,
                basicAuth: btoa(username + ":" + password)
            };
            this.store.createRecord('user', mdl).save().then(function () {
                self.transitionToRoute('users');
            });
        }
    }
});
