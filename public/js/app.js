angular
  .module('beansApp', ['ui.router'])
  .config(BeanRouter)

//makes compatible with .min
BeanRouter.$inject = ['$stateProvider', '$urlRouterProvider']
function BeanRouter($stateProvider, $urlRouterProvider){

  // Front end routes using angular ui.router:
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: 'beans_templates/index.html'
  })
  .state('new', {
    url: '/new',
    templateUrl: 'beans_templates/new.html'
  })
  .state('show', {
    url: '/beans/:id',
    templateUrl: 'beans_templates/show.html'
  })
  .state('edit', {
    url: '/beans/:id/edit',
    templateUrl: 'beans_templates/edit.html'
  });

  // Default (fallback) route:
  $urlRouterProvider.otherwise('/')

}
