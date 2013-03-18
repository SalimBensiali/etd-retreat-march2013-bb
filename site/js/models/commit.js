define([
  'underscore',
  'backbone',
  'events'
], function(_, Backbone, Events) {
  return Backbone.Model.extend({
    urlRoot: '/commits'
  });
});
