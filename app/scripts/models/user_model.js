/*global Ember */
LunchClient.User = DS.Model.extend({
    name: DS.attr(),
    desc: DS.attr(),
    avatarUrl: DS.attr()
});
