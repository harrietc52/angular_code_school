(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function () {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Dodecahedron is a great gem',
      canPurchase: true,
      soldOut: true,
    },

    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Lovely gem',
      canPurchase: true,
    }
  ];

})();
