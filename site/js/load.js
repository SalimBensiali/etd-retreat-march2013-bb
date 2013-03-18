define(['jquery'], function ($) {
  var loading = function () {
    $('#loading').show();
  };

  var done = function () {
    $('#loading').hide();
  };

  return {
    loading: loading,
    done: done
  };
});
