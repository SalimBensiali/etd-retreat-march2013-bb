require.config({
  paths: {
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min',
    jqueryui: '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/0.9.2/lodash.min',
    backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.10/backbone-min',
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.3/text',
    handlebars: '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0-rc.3/handlebars.min',
    templates: '../templates',
    fp: 'lib/fp',
    bootstrap: '//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min',
    backboneValidation: '//cdnjs.cloudflare.com/ajax/libs/backbone.validation/0.7.1/backbone-validation-min',
    moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/1.7.2/moment.min',
    backbonePaginator: '//cdnjs.cloudflare.com/ajax/libs/backbone.paginator/0.5/backbone.paginator.min',
    mockjax: '//cdnjs.cloudflare.com/ajax/libs/jquery-mockjax/1.5.1/jquery.mockjax',
    
    // HBS Handlebars loader libraries
    hbs: 'lib/hbs'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    bootstrap: {
      deps: ['jquery']
    },
    jqueryui: {
      deps: ['jquery']
    },
    backboneValidation: {
      deps: ['backbone'],
      exports: 'Backbone.Validation'
    },
    backbonePaginator: {
      deps: ['backbone']
    },
    mockjax: {
      deps: ['jquery']
    }
  },
  hbs: {
    templateExtension: 'html',
    disableI18n: true  // Disable to stop loading the i18n JSON files
  },
  deps: ["main"]
});
