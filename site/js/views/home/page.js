define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'hbs!templates/home/page'
], function($, _, Backbone, Vm, HomePageTemplate){
  return Backbone.View.extend({
    el: '.page',
    initialize: function (options) {
    },
    events: {
    },
    render: function () {
      var el = this.$el;
      var context = this;
      var html = HomePageTemplate();
      el.html(html);
    }
  });
});
