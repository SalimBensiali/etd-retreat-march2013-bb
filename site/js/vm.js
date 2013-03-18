// FIX this is a standard backbone pattern, but it is
//     attrocious, get rid of the globals.
define(['underscore', 'events'], function (_, Events) {
  var views = {};

  var create = function (context, name, View, options) {
    if(views[name] !== undefined) {
      views[name].undelegateEvents();
      views[name].clean && views[name].clean();
    }

    var view = new View(options || {});
    views[name] = view;

    if(context.children === undefined){
      context.children = {};
      context.children[name] = view;
    } else {
      context.children[name] = view;
    }

    return view;
  };

  var render = function (context, name, View, options) {
    var view = create(context, name, View, options);
    view.render();
    return view;
  };

  var fetch = function (context, name, View, options, success) {
    var view = create(context, name, View, options);
    options.model && options.model.fetch({
      success: success || function () {}
    });
    return view;
  };

  var get = function (name) {
    return views[name] !== undefined ? views[name] : false;
  };

  return {
    create: create,
    render: render,
    fetch: fetch,
    get: get
  };
});
