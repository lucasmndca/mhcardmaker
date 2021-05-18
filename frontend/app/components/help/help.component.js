app.component('help', {
    templateUrl: 'app/components/help/help.component.html',
    controller: function () {
        this.questions = [
            { title: 'How to preview a card?', body: 'Click MAKER and then fill out the form. Then, press CREATE to create the card.', list: [] },
            {
                title: 'Is there a power convention?', body: 'In short, nope. But we\'ve prepared a table for instance.', list: [
                    { itemKey: '200', value: 'Aptonoth' },
                    { itemKey: '350', value: 'Bullfango' },
                    { itemKey: '800', value: 'Giadrome' },
                    { itemKey: '900', value: 'Bulldrome' },
                    { itemKey: '1200', value: 'Great Jagras' },
                    { itemKey: '1750', value: 'Barroth' },
                    { itemKey: '2000', value: 'Rathian' },
                    { itemKey: '2300', value: 'Rathalos' },
                    { itemKey: '3000', value: 'Bazelgeuse' },
                    { itemKey: '3300', value: 'Silver Rathalos' },
                    { itemKey: '3500', value: 'Deviljho' },
                    { itemKey: '4000', value: 'Nergigante' },
                    { itemKey: '4300', value: 'Furious Rajang' },
                    { itemKey: '5000', value: 'Ukanlos' },
                    { itemKey: '????', value: 'Fatalis' },
                ]
            },
        ]
    },
    controllerAs: 'vm'
});