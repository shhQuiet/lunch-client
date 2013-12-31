function getClass(place, idx) {
    return place.get('daysOpen')[idx] ? 'btn btn-primary' : 'btn btn-default';
}

LunchClient.DaysOpenComponent = Ember.Component.extend({
    sunClass: function() {
        return getClass(this.get('place'), 0);
    }.property('place.daysOpen'),
    monClass: function() {
        return getClass(this.get('place'), 1);
    }.property('place.daysOpen'),
    tueClass: function() {
        return getClass(this.get('place'), 2);
    }.property('place.daysOpen'),
    wedClass: function() {
        return getClass(this.get('place'), 3);
    }.property('place.daysOpen'),
    thuClass: function() {
        return getClass(this.get('place'), 4);
    }.property('place.daysOpen'),
    friClass: function() {
        return getClass(this.get('place'), 5);
    }.property('place.daysOpen'),
    satClass: function() {
        return getClass(this.get('place'), 6);
    }.property('place.daysOpen')
});
