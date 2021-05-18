const app = angular.module('MhCardMaker', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        })
        .state('maker', {
            url: '/maker',
            template: '<card-maker></card-maker>'
        })
        .state('help', {
            url: '/help',
            template: '<help></help>'
        });
})