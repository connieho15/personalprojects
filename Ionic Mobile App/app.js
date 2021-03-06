// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function ($scope) {

        // get key from app settings "appkey" preferences
        AppSettings.get
            (
            // first argument - preference tag from config.xml
            ["appkey"],

        // second argument - function if SUCCESS getting key
            function (value) {
                var list = [];
                for (var x in value) {
                    list.push(value[x]);
                }
                console.log(list);
                this.localStorage.setItem("key", list);
            },

            // third argument - function of FAIL getting key (should not happen)
            function (error) {
                alert("Error! " + JSON.stringify(error));
            }

            );

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})