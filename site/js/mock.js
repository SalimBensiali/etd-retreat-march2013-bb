define([
  'jquery',
  'underscore',
  'mockjax'
], function ($, _, Mockjax) {
  $.mockjax({
    url: '/commits',
    dataType: 'json',
    responseTime: 750,
    responseText: {
        "login"   : "etorreborre",
        "repo"    : "specs2",
        "messages" : [
            "Added a utf8 declaration for the junit xml outptut. fixes #139",
            "changed 2 implicit vals to defs"
        ]
    }
  });
});