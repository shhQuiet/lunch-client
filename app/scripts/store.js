LunchClient.Store = DS.Store.extend();
LunchClient.ApplicationAdapter = DS.FixtureAdapter;
LunchClient.ApplicationAdapter = DS.RESTAdapter.extend({
    host: LunchClient.get('serverHost')
});
