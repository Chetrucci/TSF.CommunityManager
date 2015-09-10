(function () {
    'use strict';

    angular.module("communityManager.resident")
        .controller("ResidentController", ResidentController);

    ResidentController.$inject = ["repository.resident"];

    function ResidentController(RepositoryResident) {
        var vm = this;

        //controller definition
        vm.getResidents = getResidents;
        vm.goToDetail = goToDetail;
        vm.residents = [];
        
        //initialize controller
        initialize();

        //function definition
        function initialize() {
            vm.getResidents();
        }

        function getResidents() {
            var response = RepositoryResident.getResidentList().then(function (data) {
                vm.residents = data;
            });
        }

        function goToDetail() {

        }
    }

}());

