requirejs.config({
    paths: {
        'text': 'lib/require/text',
        'durandal':'lib/durandal',
        'plugins' : 'lib/durandal/plugins',
        'transitions' : 'lib/durandal/transitions',
        'knockout': 'lib/knockout/knockout-3.0.0',
        'bootstrap': 'lib/bootstrap/js/bootstrap',
        'jquery': 'lib/jquery/jquery-1.11.1.min'
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('shell');
    });
});