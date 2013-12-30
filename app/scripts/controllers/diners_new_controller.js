LunchClient.DinersNewController = Ember.Controller.extend({
    actions: {
        save: function() {
            var self = this,
                days;
            var mdl = {
                name: this.get('name'),
            };
            this.store.createRecord('diner', mdl).save().then(function() {
                self.transitionToRoute('diners');
            });
        }
    }
});
