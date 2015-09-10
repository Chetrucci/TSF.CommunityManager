(function () {
	'use strict';
	angular.module("communityManager.data")
		.factory("repository.resident", ["residentResource", RepositoryResident]);

	//RepositoryResident.$inject = ["Common"];

	function RepositoryResident(residentResource) {
		//service definition
		var service =  {
		    getResidentList: getResidentList,
			storeResident: storeResident,
			updateResident: updateResident
		}
		return service;

		//Service implementation
		function getResidentList () {
		    return residentResource.query().$promise;
		}

		function getResidentResources() {
		    return residentResource;
		}

		function storeResident() {
			return null;
		}

		function updateResident() {
			return null;
		}
	}

}());