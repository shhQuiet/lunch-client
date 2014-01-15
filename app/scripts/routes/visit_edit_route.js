LunchClient.VisitEditRoute = LunchClient.SecuredRoute.extend({
    model: function (model) {
        return this.get('store').find('visit', model.visit_id);
    }
});
