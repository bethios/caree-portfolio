(function() {
    function Fixtures() {
        var Fixtures = {};

        Fixtures.currentCategory = null;

        return Fixtures;
    }

    angular
        .module('CareeDavis')
        .factory('Fixtures', Fixtures);
})();
