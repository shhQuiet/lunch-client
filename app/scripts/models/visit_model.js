/*global Ember*/
LunchClient.Visit = DS.Model.extend({
    date: DS.attr(),
    userCount: DS.attr(),
    place: DS.belongsTo('place')
});
