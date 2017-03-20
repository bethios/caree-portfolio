(function() {
    function SamplesCtrl(Fixtures) {
        this.clips=Fixtures.films;
        this.currentCategory = Fixtures.currentCategory

    }

    angular
        .module('CareeDavis')
        .controller('SamplesCtrl', ['Fixtures', SamplesCtrl]);
})();