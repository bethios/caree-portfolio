(function() {
      function trustedLink($sce){
        return function(link){
      return $sce.trustAsResourceUrl(link);
    }
  }

    angular
        .module('CareeDavis')
        .filter('trustedLink', trustedLink);
})();
