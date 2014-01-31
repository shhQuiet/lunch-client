lunch-client [![Travis build status](http://travis-ci.org/shhQuiet/lunch-client.png)](http://travis-ci.org/shhQuiet/lunch-client) [![Code Climate](https://codeclimate.com/github/shhQuiet/lunch-client.png)](https://codeclimate.com/github/shhQuiet/lunch-client)
============

A group lunch stat/chooser

The [server](http://github.com/shhQuiet/lunch) is a node.js application that uses 'mongodb' as a back-end data store and the 'express' module for HTTP request routing.

The client is an Ember application that uses Bootstrap 3 for CSS and components.

In general, I am using the RESTAdapater from Ember Data with no changes.  I have been modifying my backend server to accomodate the needs of the adapter.

In the UI model:

- `Place` *hasMany* `Visit`
- `Visit` *belongsTo* `Place`
- `Visit` *hasMany* `Diner`
- `Diner` *hasMany* `Place`
