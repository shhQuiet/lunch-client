LunchClient.ChangeObserverRouteMixin = Ember.Mixin.create({
    actions: {
        willTransition: function(transition) {
            var lastTrans;

            if (this.controller.get('isDirty')) {
                lastTrans = LunchClient.get('pendingTransition');
                if (lastTrans) {
                    return true;
                }
                Ember.$('#confirmChanges').modal();
                LunchClient.set('pendingTransition', transition);
                transition.abort();
                return false;
            } else {
                // Bubble the `willTransition` action so that
                // parent routes can decide whether or not to abort.
                return true;
            }
        }
    }
});
