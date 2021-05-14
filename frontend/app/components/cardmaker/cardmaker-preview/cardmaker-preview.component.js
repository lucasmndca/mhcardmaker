class CardMakerPreviewController {
    constructor() {
        this.showTitle = true;
        this.card = {
            element: 'earth'
        }
    }
}

app.component('cardmakerPreview', {
    templateUrl: 'app/components/cardmaker/cardmaker-preview/cardmaker-preview.component.html',
    controller: CardMakerPreviewController,
    controllerAs: 'vm'
}); 