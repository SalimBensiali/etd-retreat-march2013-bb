define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/footer/layout'
], function ($, _, Backbone, FooterLayoutTemplate) {
  return Backbone.View.extend({
    el: '#footer',
    initialize: function () {},
    render: function () {
      var el = this.$el;
      var html = FooterLayoutTemplate();
      el.html(html);
    }
  });
});
