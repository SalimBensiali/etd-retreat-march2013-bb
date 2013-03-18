define([
  'backbone',
  'vm',
  'load',
  'events',
  'collections/commit',
  'views/home/page',
  'views/commits/list'
], function (
  Backbone,
  Vm,
  Load,
  Events,
  CommitsCollection,
  HomePage,
  CommitsListView
) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'commits': 'commits'
    }
  });

  var initialize = function (options) {
    var app = options.app;
    var router = new Router(options);
    Backbone.router = router;

    var onsuccess = {
      success: function () {
        Load.done();
      }

    };

    router.on('route:commits', function () {
      var commits = new CommitsCollection();
      Vm.create(app, 'page', CommitsListView, { model: commits });
      commits.fetch(onsuccess);
    });

    router.on('route:home', function () {
      Vm.render(app, 'page', HomePage, {});
    });
  };

  return {
    initialize: initialize
  };
});
