define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'events',
  'hbs!templates/header/layout'
], function ($, _, Backbone, Vm, Events, HeaderLayoutTemplate) {
  return Backbone.View.extend({
    el: '.header',
    initialize: function () {
    },
    events: {
    },
    render: function () {
      var el = this.$el;
      var html = HeaderLayoutTemplate({});
      el.html(html);
    }
  });
});
