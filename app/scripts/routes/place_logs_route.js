LunchClient.PlaceLogsRoute = Ember.Route.extend({
    model: function (model) {
        return this.get('store').find('place', model.place_id);
    }
});
