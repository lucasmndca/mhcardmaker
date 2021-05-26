import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export default function validateSecurityToken(
    { requester, targetUser, securityToken }, res, next) {

    const db = new JsonDB(new Config("database", true, true, '/'));  
    const requesterData = db.getData(`/users/${requester.id}`);
    return securityToken === requesterData.securityToken ? next() : res.send(false);
}