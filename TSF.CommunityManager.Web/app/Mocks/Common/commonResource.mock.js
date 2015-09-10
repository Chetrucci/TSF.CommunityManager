(function () {
    'use strict';

    var app = angular.module("communityManager.mocks");

    app.run(function ($httpBackend) {

        $httpBackend.whenGET("app/Layout/Views/Layout.header.html").passThrough();
        $httpBackend.whenGET("app/Resident/Views/resident.list.html").passThrough();

    });

}());