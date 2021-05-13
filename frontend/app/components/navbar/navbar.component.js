class NavbarController {
    constructor() {
        this.title = 'mhcardmaker',
        this.pages = {
            home: 'Home',
            maker: 'Maker',
            help: 'Help'
        }
    }
}

app.component('navbar', {
    templateUrl: 'app/components/navbar/navbar.component.html',
    controller: NavbarController,
    controllerAs: 'vm'
});