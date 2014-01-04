LunchClient.SuggestionRoute = Ember.Route.extend({
    model: function (model) {
        return this.get('store').find('suggestion', model.suggestion_id);
    }
});

