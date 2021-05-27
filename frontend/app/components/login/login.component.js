class Login {
    constructor($state, authService) {
        this.$state = $state;
        this.authService = authService;
    }

    login() {
        authService.login();
        this.$state.go("home");
    }
}

app.component('login', {
    templateUrl: 'app/components/login/login.component.html',
    controller: Login
});