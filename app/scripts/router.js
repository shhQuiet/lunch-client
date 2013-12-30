LunchClient.Router.map(function() {

    this.resource('place_edit');
    this.resource('place_edit', {
        path: '/place_edit/:place_edit_id'
    });
    this.resource('place_edit.edit', {
        path: '/place_edit/:place_edit_id/edit'
    });

    this.resource('places', function() {
        this.route('new');
    });
    this.resource('place', {
        path: '/place/:place_id'
    });
    this.resource('place.edit', {
        path: '/place/:place_id/edit'
    });

});
