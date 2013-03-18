define(['jquery', 'backbone'], function ($, Backbone) {
  var intercept = function (event) {
    var $target = $(event.currentTarget);
    if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
      event.preventDefault();
      var url = $target.attr('href').replace(/^\//, "");
      Backbone.router.navigate(url, { trigger: true });
    }
  };

  return {
    intercept: intercept
  };
});
