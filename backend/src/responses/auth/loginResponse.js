export class LoginResponse {
    constructor(valid) {
        this.valid = valid;
        this.loggedAt = new Date();
        this.securityToken = "abc123#@!"
    }
}