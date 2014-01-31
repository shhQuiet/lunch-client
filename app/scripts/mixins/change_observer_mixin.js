/*global confirm */

LunchClient.ChangeObserverRouteMixin = Ember.Mixin.create({
    actions: {
        willTransition: function(transition) {
            if (this.controller.get('isDirty') && !confirm("Are you sure you want to lose your changes?")) {
                transition.abort();
            } else {
                // Bubble the `willTransition` action so that
                // parent routes can decide whether or not to abort.
                return true;
            }
        }
    }
});
