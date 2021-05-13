class HomeController {
    constructor() {
        this.welcomeMessage = 'Welcome to mhcardmaker',
        this.description = 'Where the universes of Monster Hunter and Yu-Gi-Oh merge.',
        this.ctaButton = 'Make a new card!'
    }
}

app.component('home', {
    templateUrl: 'app/components/home/home.component.html',
    controller: HomeController,
    controllerAs: 'vm'
});