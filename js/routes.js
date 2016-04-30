angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.produto', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/produto.html',
        controller: 'produtoCtrl'
      }
    }
  })

  .state('menu.empresa', {
    url: '/cloudazure',
    views: {
      'side-menu21': {
        templateUrl: 'templates/empresa.html',
        controller: 'empresaCtrl'
      }
    }
  })

  .state('menu.contato', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page8',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page7')

  

});