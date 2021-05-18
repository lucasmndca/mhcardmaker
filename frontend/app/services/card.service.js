class CardService {
    constructor($http) {
        this.$http = $http;
    }

    getExistingCards() {
        return this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => { return res.data }, this.onError);
    }

    onError() {
        console.error('oops');
    }
}

app.service('cardService', CardService);