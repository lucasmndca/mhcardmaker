export default function validateSecurityToken({ username, securityToken }, res, next) {
    // TODO get active token for that user
    const token = "abc123#@!"
    return securityToken === token ? next() : res.send(false);
}