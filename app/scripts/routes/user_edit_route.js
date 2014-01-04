LunchClient.UserEditRoute = Ember.Route.extend({
	beforeModel: function() {
		if (LunchClient.get('auth')) {
			this.transitionTo('index');
		}
	},
    model: function(model) {
        return this.get('store').find('user', model.user_id);
    }
});
