/*global Ember */
LunchClient.Place = DS.Model.extend({
    name: DS.attr(),
    desc: DS.attr(),
    thumbnailUrl: DS.attr(),
    daysOpen: DS.attr(),
    isOpenSun: Ember.computed.bool('daysOpen.0'),
    isOpenMon: Ember.computed.bool('daysOpen.1')
});
