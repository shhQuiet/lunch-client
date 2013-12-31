LunchClient.PlaceEditController = Ember.ObjectController.extend({
    actions: {
        save: function() {
            var self = this;
            this.get('model').save().then(function() {
                self.transitionToRoute('places');
            });
        },
        deletePlace: function() {
            var self = this,
                mdl = this.get('model');
            mdl.deleteRecord();
            mdl.save().then(function() {
                this.setTimeout(function() {
                    self.transitionToRoute('places');
                }, 500);
            }, function(err) {
                console.log('ERROR:' + err);
            });
        }
    }
});
