(function() {
    function SamplesCtrl(Fixtures) {

        this.clips=Fixtures.films;
    }

    angular
        .module('CareeDavis')
        .controller('SamplesCtrl', ['Fixtures', SamplesCtrl]);
})();