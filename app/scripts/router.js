LunchClient.Router.map(function() {

    this.resource('suggestions');
    this.resource('suggestion', {
        path: '/suggestion/:suggestion_id'
    });

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

    this.resource('visits');
    this.resource('visit', {
        path: '/visit/:visit_id'
    });

    this.resource('place.edit', {
        path: '/place/:place_id/edit'
    });

    this.resource('diners', function() {
        this.route('new');
    });
    this.resource('diner', {
        path: '/diner/:diner_id'
    });
    this.resource('diner.edit', {
        path: '/diner/:diner_id/edit'
    });

});
