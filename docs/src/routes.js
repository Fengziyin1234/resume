(function() {
    'use strict'

    angular.module("ResumeApp")
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
    	console.log("hello");
    	$urlRouterProvider.otherwise('/');

    	 $stateProvider

    	 .state('home', {
    	 	url:'/',
    	 	templateUrl: 'src/templates/home.html'
    	 })

    	 // education part
    	 .state('education', {
    	 	url: '/education',
    	 	templateUrl: 'src/templates/education.html'
    	 })

    	 // experience part
    	 .state('experience',{
    	 	url: '/experience',
    	 	templateUrl: 'src/templates/experience.html'
    	 })

    	 // project part
    	 .state('project', {
			url: '/project',
    	 	templateUrl: 'src/templates/project.html'
    	 })

		// volunteer part
    	 .state('volunteer',{
    	 	url: '/volunteer',
    	 	templateUrl: 'src/templates/volunteer.html'
    	 })

         // contact part
         .state('contact',{
            url: '/contact',
            templateUrl: 'src/templates/contact.html'
         });
    }
})();
