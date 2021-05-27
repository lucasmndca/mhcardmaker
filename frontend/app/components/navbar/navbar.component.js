class NavbarController {
    constructor() {
        this.title = 'mhcardmaker',
            this.pages = {
                home: 'Home',
                maker: 'Maker',
                help: 'Help',
                profile: 'My profile'
            },
            this.actions = {
                login: 'Login',
                logout: 'Logout'
            },
            this.session = {authenticated: false}
    }
}

app.component('navbar', {
    templateUrl: 'app/components/navbar/navbar.component.html',
    controller: NavbarController,
    controllerAs: 'vm'
});