(function() {
    function LandingCtrl(Fixtures) {
        this.setCategory = function(selection) {
            Fixtures.currentCategory = selection;
            console.log(Fixtures.currentCategory)
        };
        this.reel = "../assets/clips/CareeDavisReelCompressed2.mp4";
    }

    angular
        .module('CareeDavis')
        .controller('LandingCtrl', ['Fixtures' , LandingCtrl]);
})();

