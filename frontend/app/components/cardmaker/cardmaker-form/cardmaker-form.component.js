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
                cancel: 'Cancel'
            }
        };
        this.levels = [];
        this.types = [];
        this.elements = [];
        this.aliments = [];
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
}

app.component('cardmakerForm', {
    templateUrl: 'app/components/cardmaker/cardmaker-form/cardmaker-form.component.html',
    controller: CardMakerFormController,
    controllerAs: 'vm'
});