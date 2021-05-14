class CardMakerPreviewController {
    constructor() {
        this.showTitle = true;
        this.amountOfStars = [];
    }

    $onInit() {}

    getCardLevel() {
        this.amountOfStars = [];
        for (let i = 1; i <= this.card.level; i++) {
            this.amountOfStars.push(i);
        }
    }
}

app.component('cardmakerPreview', {
    bindings: { card: '<' },
    templateUrl: 'app/components/cardmaker/cardmaker-preview/cardmaker-preview.component.html',
    controller: CardMakerPreviewController,
    controllerAs: 'vm'
});