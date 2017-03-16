(function() {
    function LandingCtrl(Fixtures) {
        this.setCategory = function(selection) {
            Fixtures.currentCategory = selection;
            console.log(Fixtures.currentCategory)
        }
    }

    angular
        .module('CareeDavis')
        .controller('LandingCtrl', 'Fixtures' ,LandingCtrl);
})();

