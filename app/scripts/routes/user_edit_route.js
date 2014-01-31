LunchClient.UserEditRoute = Ember.Route.extend(LunchClient.SecuredRouteMixin, {
    model: function (model) {
        return this.get('store').find('user', model.user_id);
    }
});
