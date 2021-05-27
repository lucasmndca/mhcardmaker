class AuthService {
    constructor($http) {
        this.$http = $http;
    }

    login() {
        this.$http.post("http://localhost:3000/auth/login")
            .then();
    }
}

app.service('authService', AuthService);