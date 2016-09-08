(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('province', province);

	function province() {

		function getProvinces() {
			return [
			{
				"name": "Ilocos Region",
				"value": "ilocos_region"
			},
			{
				"name": "Cagayan Valley",
				"value": "cagayan_valley"
			},
			{
				"name": "Central Luzon",
				"value": "central_luzon"
			},
			{
				"name": "Calabarzon",
				"value": "calabarzon"
			},
			{
				"name": "Bicol Region",
				"value": "bicol_region"
			},
			{
				"name": "Western Visayas",
				"value": "western_visayas"
			},
			{
				"name": "Central Visayas",
				"value": "central_visayas"
			},
			{
				"name": "Eastern Visayas",
				"value": "eastern_visayas"
			},
			{
				"name": "Zamboanga Peninsula",
				"value": "zamboanga_peninsula"
			},
			{
				"name": "Northern Mindanao",
				"value": "northern_mindanao"
			},
			{
				"name": "Davao Region",
				"value": "davao_region"
			},
			{
				"name": "Soccsksargen",
				"value": "soccsksargen"
			},
			{
				"name": "National Capital Region",
				"value": "national_capital_region"
			},
			{
				"name": "Cordillera Administrative Region",
				"value": "cordillera_administrative_region"
			},
			{
				"name": "Autonomous Region in Muslim Mindanao",
				"value": "autonomous_region_in_muslim_mindanao"
			},
			{
				"name": "Caraga",
				"value": "caraga"
			},
			{
				"name": "Mimaropa",
				"value": "mimaropa"
			},
			{
				"name": "Negros Island Region",
				"value": "negros_island_region"
			},
			];
		}

		return {
			getProvinces: getProvinces
		}
	}
})();