class FooterController {
    constructor() {
        this.creationYear = '2021';
    }

    getFooterDates() {
        const currentYear = new Date().getFullYear();
        return ` | ${this.creationYear}${this.creationYear == currentYear ? '' : ' - ' + currentYear}`
    }
}

app.component('appFooter', {
    templateUrl: 'app/components/footer/footer.component.html',
    controller: FooterController,
    controllerAs: 'vm'
});