import express from 'express';
import validateSecurityToken from '../middlewares/validateSecurityToken';
import { AuthService } from '../services/authService';

const router = express.Router();

router.get('/users', (req, res, next) => validation(req, res, next), (req, res) => res.send('Returns a list of all users'));

router.get('/users/:id', (req, res) => res.send('Gets one user'));

router.post('/users/', (req, res) => res.send('Creates user'));

router.post('/login', (req, res) => {
    return res.send(AuthService.login(req.body));
});

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