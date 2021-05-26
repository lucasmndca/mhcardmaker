import express from 'express';
import validateSecurityToken from '../middlewares/validateSecurityToken';
import { AuthService } from '../services/authService';

const router = express.Router();

router.get('/users', (req, res, next) => validation(req, res, next), (req, res) => res.send('Returns a list of all users'));

router.get('/users/:id', (req, res) => res.send('Gets one user'));
/**
 * Creates a new user.
 * @returns A confirmation message
 */
router.post('/users/new',
    function (req, res, next) {
        console.log(req.body);
        return validateSecurityToken(req.body, res, next)
    },
    function (req, res) {
        return res.send(AuthService.createUser(req.body));
    });

/**
 * Logs in.
 * @returns A LoginResponse object.
*/
router.post('/login', (req, res) => {
    return res.send(AuthService.login(req.body));
});

/**
 * Logs out.
 * @returns A LogoutResponse object.
 */
router.post('/logout',
    function (req, res, next) {
        return validateSecurityToken(req.body, res, next)
    },
    function (req, res) {
        return res.send(AuthService.logout(req.body));
    });

router.put('/users/:id', (req, res) => res.send('Edits an user'));

router.delete('/users/:id', (req, res) => res.send('Deletes an user.'));

export default router;