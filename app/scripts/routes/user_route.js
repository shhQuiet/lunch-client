LunchClient.UserRoute = Ember.Route.extend({
    model: function (model) {
        return this.store.find('user', model.user_id);
    }
});
