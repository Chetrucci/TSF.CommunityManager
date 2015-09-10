(function () {
	'use strict';

	angular.module("communityManager.resources")
		.factory("residentResource", ["$resource", residentResource])


	function residentResource($resource) {
		return $resource("/api/residents/:productId");
	}

}())