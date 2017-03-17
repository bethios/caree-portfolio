(function() {
    function Fixtures() {
        var Fixtures = {};

        Fixtures.currentCategory = null;

        var films=[
            {   link: 'https://www.youtube.com/embed/ixZIt8sJRQ4?ecver=2',
                description: 'Produced Marketing and Next Generation App Content for Director Jordan Vogt-Roberts debut #1 feature film'
            },
            {   link: 'https://www.youtube.com/embed/JsgPCG03Ed0?ecver=2',
                description: 'Produced an extension of the feature film - a fictional entertainment news show that takes place within Gotham ' +
                'City. Showcases key cast members from the film including Christian Bale, Aaron Eckhart, Anthony Michael Hall, ' +
                'and Gary Oldman / 6 Episodes air on Comcast Cable, Internet &amp; appear on The Dark Knight DVD.'
            },
            {   link: 'https://www.youtube.com/embed/NGGlv2cJ8Ck?ecver=2',
                description: 'Produced Marketing, Viral Content and EPK coverage for largest live recorded game-play experience ' +
                'Shot on location & at YouTube Space LA in conjunction with production company Alpine Labs'
            }

        ];

        return Fixtures;
    }

    angular
        .module('CareeDavis')
        .factory('Fixtures', Fixtures);
})();
