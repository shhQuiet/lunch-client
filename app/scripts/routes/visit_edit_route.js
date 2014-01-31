LunchClient.VisitEditRoute = Ember.Route.extend(LunchClient.SecuredRouteMixin, {
    model: function (model) {
        return this.get('store').find('visit', model.visit_id);
    }
});
