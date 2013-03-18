require(['backbone', 'router', 'app', 'vm', 'jquery', 'jqueryui', 'bootstrap'],
    function (Backbone, Router, App, Vm) {
  var app = Vm.create({}, 'App', App);
  Router.initialize({ app: app });
  app.render();
});
