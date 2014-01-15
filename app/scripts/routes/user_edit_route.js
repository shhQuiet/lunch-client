LunchClient.UserEditRoute = LunchClient.SecuredRoute.extend({
    model: function (model) {
        return this.get('store').find('user', model.user_id);
    }
});
