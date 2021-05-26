export class LogoutResponse {
    constructor(loggedOut) {
        this.loggedOut = loggedOut;
        this.loggedOutAt = new Date();
    }
}