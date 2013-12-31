/*global Ember*/
LunchClient.Visit = DS.Model.extend({
    date: DS.attr(),
    dinerCount: DS.attr(),
    place: DS.belongsTo('place', {
        async: true
    })
});
