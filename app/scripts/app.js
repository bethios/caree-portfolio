(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            })
            .state('samples', {
                url: '/samples',
                controller: 'SamplesCtrl as samples',
                templateUrl: '/templates/samples.html'
            })
            .state('resume', {
                url: '/resume',
                controller: 'ResumeCtrl as resume',
                templateUrl: '/templates/resume.html'
            })
            .state('contact', {
                url: '/contact',
                controller: 'ContactCtrl as contact',
                templateUrl: '/templates/contact.html'
            });
    }

    angular.module('CareeDavis', ['ui.router']);
    angular
        .module('CareeDavis', ['ui.router'])
        .config(config);
})();