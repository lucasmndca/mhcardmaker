class CardMakerFormController {
    constructor() {
        this.constants = {
            title: 'Card maker',
            description: 'Fill out the following fields to create a new card.',
            form: {
                title: 'Title',
                description: 'Description',
                coverUrl: 'Cover URL',
                type: 'Type',
                level: 'Level',
                element: 'Element',
                aliment: 'Aliment',
                attack: 'Attack',
                defense: 'Defense',
                create: 'Create',
                cancel: 'Cancel',
                preview: 'Preview'
            }
        };
        this.levels = [];
        this.types = [];
        this.elements = [];
        this.aliments = [];
        this.card = {};
    }

    $onInit() {
        this.fillLevels();
        this.fillType();
        this.fillElements();
        this.fillAliments();
    }

    fillLevels() {
        const maxLevel = 12;
        for (let i = 1; i <= maxLevel; i++) {
            this.levels.push(i);
        }
    }

    fillType() {
        // TODO: get from database
        this.types = [
            'Amphibian',
            'Bird Wyvern',
            'Brute Wyvern',
            'Carapaceon',
            'Elder Dragon',
            'Fanged Beasts',
            'Fanged Wyvern',
            'Fish',
            'Flying Wyvern',
            'Herbivore',
            'Leviathan',
            'Lynian',
            'Neopteron',
            'Piscine Wyvern',
            'Relict',
            'Snake Wyvern',
            'Temnoceran',
            'Unknown / ???',
            'Wingdrake'
        ];
    }

    fillElements() {
        // TODO: get from database
        this.elements = [
            'Dragon',
            'Earth',
            'Fire',
            'Ice',
            'Light',
            'Thunder',
            'Water',
            'Wind',
        ];
    }

    fillAliments() {
        // TODO: get from database
        this.aliments = [
            'Blast',
            'Bleeding',
            'Fatigue',
            'Paralyze',
            'Poison',
            'Sleep',
        ];
    }

    create() {
        alert('oi')
    }

    buildCard() {
        const { card } = this;
        return {
            title: card.title && card.title != '' ? card.title : 'No title',
            description: card.description,
            coverUrl: card.coverUrl,
            type: card.type,
            level: card.level ?? 1,
            element: card.element ? card.element.toLowerCase() : '',
            aliment: card.aliment ?? '',
            attack: card.attack,
            defense: card.defense
        }
    }

    previewClick() {
        const card = this.buildCard();
        this.preview({ card });
    }
}

app.component('cardmakerForm', {
    bindings: { preview: '&' },
    templateUrl: 'app/components/cardmaker/cardmaker-form/cardmaker-form.component.html',
    controller: CardMakerFormController,
    controllerAs: 'vm'
});