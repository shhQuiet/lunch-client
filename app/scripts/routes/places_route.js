LunchClient.PlacesRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('place');
    }
});
