LunchClient.PlacesNewController = Ember.Controller.extend({
    actions: {
        save: function() {
            var self = this,
                days;
            var mdl = {
                name: this.get('name'),
                daysOpen: [true, false, true, true, true, true, true]
            };
            this.store.createRecord('place', mdl).save().then(function() {
                self.transitionToRoute('places');
            });
        }
    }
});
