LunchClient.PlacesController = Ember.ArrayController.extend({
    name: '',
    actions: {
        addNewPlace: function () {
            var self = this,
                days,
                mdl = {
                    name: this.get('name'),
                    daysOpen: [true, false, true, true, true, true, true]
                },
                rec = this.store.createRecord('place', mdl);

            rec.save().then(function () {
            }, function (err) {
                rec.destroyRecord();
                self.store.unloadRecord(rec);
            });
            this.set('name', '');
        }
    }
});
