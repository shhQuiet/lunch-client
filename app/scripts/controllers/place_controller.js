LunchClient.PlaceController = Ember.ObjectController.extend({
    date: '',
    actions: {
        addNewVisit: function() {
            var self = this,
                days,
                mdl = {
                    date: this.get('date'),
                    dinerCount: this.get('dinerCount')
                },
                rec = this.store.createRecord('visit', mdl);

            rec.save().then(function(rec) {
                var mdl = self.get('model');

                mdl.get('visits').pushObject(rec);
                mdl.save();
            }, function(err) {
                rec.rollback();
                self.store.unloadRecord(rec);
            });
            this.set('date', '');
            this.set('dinerCount', 0);
        }
    }
});
