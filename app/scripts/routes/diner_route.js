LunchClient.DinerRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('diner', model.diner_id);
  }
});

