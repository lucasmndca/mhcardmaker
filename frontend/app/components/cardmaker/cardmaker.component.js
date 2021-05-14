class CardMakerController {
    constructor() {
        this.card;
    }

    preview(card) {
        this.card = card;
    }
}

app.component('cardMaker', {
    templateUrl: 'app/components/cardmaker/cardmaker.component.html',
    controller: CardMakerController,
    controllerAs: 'vm'
}); 