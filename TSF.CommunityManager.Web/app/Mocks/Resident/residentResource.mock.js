(function () {
    'use strict';

    var app = angular.module("communityManager.mocks");

    app.run(function ($httpBackend) {

        var residents = [
            { firstName: "Ivanna", lastName: "Lozada", address: "Test Address", village: "Test Village", region: "Test Region", phone: "111-111-1111", lastPaymentAmount: "1000" },
            { firstName: "Carolina", lastName: "Acosta", address: "Test Address", village: "Test Village", region: "Test Region", phone: "111-111-1111", lastPaymentAmount: "2165" },
            { firstName: "Luis", lastName: "Lozada", address: "Test Address", village: "Test Village", region: "Test Region", phone: "111-111-1111", lastPaymentAmount: "9874" }
        ];

        $httpBackend.whenGET("/api/residents").respond(residents);
    });

}());