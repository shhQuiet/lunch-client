var LunchClient = window.LunchClient = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

LunchClient.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:3000',
    dataType: 'jsonp'
});
