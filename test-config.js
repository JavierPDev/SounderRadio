// Load our SystemJS configuration.
System.config({
  baseURL: '/base/',

	// npm dependencies
	defaultJSExtensions: true,
  paths: {
    'angular2-moment/*': 'node_modules/angular2-moment/*.js',
    'angular2-toaster/*': 'node_modules/angular2-toaster/*.js'
  }
});

