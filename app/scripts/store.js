LunchClient.Store = DS.Store.extend();
LunchClient.ApplicationAdapter = DS.FixtureAdapter;
LunchClient.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://group-lunch-stats.herokuapp.com/'
});
LunchClient.ApplicationAdapter.ajaxOptions = function (url, type, hash) {
    hash = hash || {};
    hash.url = url;
    hash.type = type;
    hash.dataType = 'json';
    hash.context = this;

    if (hash.data && type !== 'GET') {
        hash.contentType = 'application/json; charset=utf-8';
        hash.data = JSON.stringify(hash.data);
    }

    var headers = {
        Authorization: this.get('auth')
    };

    hash.beforeSend = function (xhr) {
        Ember.keys(headers).forEach(function (key) {
            xhr.setRequestHeader(key, headers[key]);
        });
    };
    return hash;
};
