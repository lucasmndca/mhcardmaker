import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { LoginResponse } from "../responses/auth/loginResponse";
import { LogoutResponse } from "../responses/auth/logoutResponse";

export class AuthService {
    static mock = [
        { username: 'lucas', password: '123' },
        { username: 'admin', password: '123' },
    ];

    static login({ username, password }) {
        let usernameExists = false;
        let passwordMatches = false;
        const notUndefCredentials = undefined !== username && undefined !== password;

        if (notUndefCredentials) {
            for (let entry of this.mock) {
                console.log(entry.username);
                if (entry.username == username) {
                    usernameExists = true;
                    passwordMatches = entry.password === password;
                    console.log(passwordMatches);
                    break;
                }
            }
        }

        return new LoginResponse(usernameExists && passwordMatches);
    }

    static logout() {
        return new LogoutResponse(true);
    }


    static createUser({ targetUser }) {
        const db = new JsonDB(new Config("database", true, true, '/'));
        const lastId = db.getData("/users/lastId");
        
        db.push(`/users/${lastId + 1}`, targetUser);
        db.push("/users/lastId", lastId + 1);

        return true;
    }
}