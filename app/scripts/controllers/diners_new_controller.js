LunchClient.UsersNewController = Ember.Controller.extend({
    actions: {
        save: function() {
            var self = this,
                days;
            var mdl = {
                name: this.get('name'),
            };
            this.store.createRecord('user', mdl).save().then(function() {
                self.transitionToRoute('users');
            });
        }
    }
});
