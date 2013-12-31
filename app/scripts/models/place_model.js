/*global Ember */
LunchClient.Place = DS.Model.extend({
    name: DS.attr(),
    desc: DS.attr(),
    thumbnailUrl: DS.attr(),
    daysOpen: DS.attr(),
    menuUrl: DS.attr(),
    visits: DS.hasMany('visit', {
        async: true
    }),
    isOpenSun: Ember.computed.bool('daysOpen.0'),
    isOpenMon: Ember.computed.bool('daysOpen.1'),
    isOpenTue: Ember.computed.bool('daysOpen.2'),
    isOpenWed: Ember.computed.bool('daysOpen.3'),
    isOpenThu: Ember.computed.bool('daysOpen.4'),
    isOpenFri: Ember.computed.bool('daysOpen.5'),
    isOpenSat: Ember.computed.bool('daysOpen.6')
});
