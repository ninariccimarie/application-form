(function() {
	'use strict';

	angular
		.module('app')
		.controller('User', User);

	function User($scope, $http, jobposition, province) {
		$scope.test = 'testing';
		var vm = this;

		vm.user = {};
		vm.options = {formState: {}};
		vm.userFields = [
			{
				key: 'job_position',
				type: 'select',
				templateOptions: {
					label: 'Job Position',
					options: jobposition.getJobPosition()
				}
			},
			{
				key: 'first_name',
				type: 'input',
				templateOptions: {
					type: 'text',
					label: 'First Name',
					placeholder: 'Enter your first name',
					required: true
				}
			},
			{
				key: 'last_name',
				type: 'input',
				templateOptions: {
					type: 'text',
					label: 'Last Name',
					placeholder: 'Enter your last name',
					required: true
				}
			},
			{
				key: 'province',
				type: 'select',
				templateOptions: {
					label: 'Province',
					options: province.getProvinces()
				}
			},
			{
				key: 'email',
				type: 'input',
				templateOptions: {
					type: 'email',
					label: 'Email Address',
					placeholder: 'Enter email',
					required: true
				}
			},
			{
				key: 'contact_number',
				type: 'input',
				templateOptions: {
					type: 'text',
					label: 'Contact Number',
					placeholder: 'Enter contact number',
					required: true
				}
			}
		];


		vm.getUsers = function() {
			$http.get('/users').then(function(response) {
				vm.userFields = response.data;
			});
		};

		vm.addUser = function(user) {
			$http.post('/users', user).then(function() {
				vm.user;
				return vm.getUsers();
			});
		};

		vm.getUsers();

		function onSubmit() {
			return vm.addUser();
			// vm.options.updateInitialValue();
   //    		alert(JSON.stringify(vm.user), null, 2);
		}
	}
})();