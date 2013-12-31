LunchClient.VisitsRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('visit');
  }
});

