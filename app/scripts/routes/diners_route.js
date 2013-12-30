LunchClient.DinersRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('diner');
  }
});

