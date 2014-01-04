LunchClient.PlaceEditRoute = Ember.Route.extend({
    init: function () {
        var self = this;
        this.addObserver('exit', self.get('model'), function () {
            var mdl = self.get('model');
            if (mdl) {
                console.log('rolling back place changes...');
                mdl.rollback();
            }
        });
    },
    model: function (model) {
        return this.get('store').find('place', model.place_id);
    }
});
