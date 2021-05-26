import express from 'express';
import validation from '../middlewares/validation';

const router = express.Router();

router.get('/', validation(req, res, next), (req, res) => res.send('Returns a list of all users'));

router.get('/users/:id', (req, res) => res.send('Gets one user'));

router.post('/users/', (req, res) => res.send('Creates user'));

router.put('/users/:id', (req, res) => res.send('Edits an user'));

router.delete('/users/:id', (req, res) => res.send('Deletes an user.'));

export default router;