/*global Ember */
LunchClient.Diner = DS.Model.extend({
    name: DS.attr(),
    desc: DS.attr(),
    thumbnailUrl: DS.attr()
});
