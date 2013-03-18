define([
  'jquery',
  'backbone',
  'pushstate',
  'vm',
  'events',
  'load',
  'views/header',
  'views/footer',
  'hbs!templates/layout',
  'mock'
], function ($, Backbone, Pushstate, Vm, Events, Load, HeaderView, FooterView, LayoutTemplate, Mock) {
  var root = AppInfo.root;
  var api = AppInfo.api;

  return Backbone.View.extend({
    el: 'body',
    initialize: function () {
      $.ajaxPrefilter(function (options, originalOptions, jqXhr) {
        options.url = api + options.url;
      });
    },
    render: function () {
      var context = this;
      var el = this.$el;
      el.html(LayoutTemplate({}));

      Vm.render(context, 'header', HeaderView);
      Vm.render(context, 'footer', FooterView);

      $(document).delegate("a[href^='/']", 'click', Pushstate.intercept);
      Backbone.history.start({pushState: true, root: root});
    },
    events: {
    }
  });
});
