LunchClient.PlaceController = Ember.ObjectController.extend({
    visit: Ember.Object.extend({
        date: 'today',
        dinerCount: 1
    }),
    actions: {
        addNewVisit: function() {
            var self = this,
                place = this.get('model'),
                mdl = {
                    date: this.get('visit.date'),
                    dinerCount: this.get('visit.dinerCount'),
                    place: place
                },
                rec = this.store.createRecord('visit', mdl);

            place.get('visits').pushObject(rec);
            // place.save();
            rec.save().then(function(rec) {
                place.save().then(function() {}, function(err) {
                    console.log("ERROR saving place:" + err.status);
                    rec.rollback();
                    self.store.unloadRecord(rec);
                });
            }, function(err) {
                console.log("ERROR saving visit:" + err.status);
                rec.rollback();
                self.store.unloadRecord(rec);
            });
            self.set('date', '');
            self.set('dinerCount', 0);
        }
    }
});
