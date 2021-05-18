class HomeCardsListController {
    constructor(cardService) {
        this.existingCards = [];
        
        this.getExistingCards(cardService)
    }

    async getExistingCards(cardService) {
        await cardService.getExistingCards().then((res) => this.existingCards = res);
        console.log(this.existingCards);
    }
}

app.component('homeCardsList', {
    templateUrl: 'app/components/home-cards-list/home-cards-list.component.html',
    controller: HomeCardsListController,
    controllerAs: 'vm'
});