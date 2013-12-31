LunchClient.VisitRoute = Ember.Route.extend({
    model: function(model) {
        return this.get('store').find('visit', model.visit_id);
    }
});
