define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'hbs!templates/commits/list'
], function($, 
    _, 
    Backbone, 
    Vm, 
    CommitsListTemplate
  ) {
  return Backbone.View.extend({
    el: '.page',
    initialize: function (options) {
      this.model.bind('reset', this.render, this);
    },
    events: {
    },
    render: function () {
      var el = this.$el;
      var model = this.model;
      var html = CommitsListTemplate({commits: model.toJSON()});
      el.html(html);
    }
  });
});

