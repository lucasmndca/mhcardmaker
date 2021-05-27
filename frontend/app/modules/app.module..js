const app = angular.module('MhCardMaker', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            template: '<login></login>'
        })
        .state('home', {
            url: '/home',
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