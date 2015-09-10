(function () {
    'use strict';

    var app = angular.module("communityManager", [
        "ui.router",
        "communityManager.data",
        "communityManager.resources",
        "communityManager.resident",
        "communityManager.mocks"
    ]);

    app.config(["$urlRouterProvider", "$stateProvider", defaultRouteConfiguration]);

   function defaultRouteConfiguration($urlRouterProvider, $stateProvider) {
       $urlRouterProvider.otherwise("/index");

       $stateProvider.state("index", {
           url : "/index",
           templateUrl: "app/Resident/Views/resident.list.html",
           controller : "ResidentController"
       });
   }

}())
