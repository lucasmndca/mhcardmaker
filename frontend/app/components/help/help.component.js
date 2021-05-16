class HelpComponentController {
    constructor() {}
}

app.component('help', {
    templateUrl: 'app/components/help/help.component.html',
    controller: HelpComponentController,
    controllerAs: 'vm'
});