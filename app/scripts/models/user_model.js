/*global Ember */
LunchClient.User = DS.Model.extend({
    username: DS.attr(),
    desc: DS.attr(),
    avatarUrl: DS.attr()
});
