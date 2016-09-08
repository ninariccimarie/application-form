(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('jobposition', jobposition);

	function jobposition() {

		function getJobPosition() {
			return [
			{
				"name": "Content Researcher",
				"value": "content_researcher"
			},
			{
				"name": "Data Analyst",
				"value": "data_analyst"
			},
			{
				"name": "Finance and Admin Officer",
				"value": "finance_and_adminofficer"
			},
			{
				"name": "Junior Web Developer",
				"value": "junior_web_developer"
			},
			{
				"name": "Marketing Manager",
				"value": "marketing_manager"
			},
			{
				"name": "Merchandiser",
				"value": "merchandiser"
			},
			{
				"name": "Mobile Application Developer",
				"value": "mobile_application_developer"
			},
			{
				"name": "Sales Coordinator",
				"value": "sales_coordinator"
			},
			{
				"name": "Sales Warrior",
				"value": "sales_warrior"
			},
			{
				"name": "Senior Creatives Associate | Photo Editor",
				"value": "senior_creatives_associate_photo_editor"
			}
			];
		}

		return {
			getJobPosition: getJobPosition
		}
	}
})();