LunchClient.PlaceController = Ember.ObjectController.extend({
    visit: Ember.Object.extend({
        date: 'today',
        userCount: 1
    }),
    actions: {
        addNewVisit: function() {
            var self = this,
                place = this.get('model'),
                mdl = {
                    date: this.get('visit.date'),
                    userCount: this.get('visit.userCount'),
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
            self.set('userCount', 0);
        }
    }
});
