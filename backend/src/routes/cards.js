import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send([1,2,3,4,5,6]));

router.get('/:userId', (req, res) => res.send('Returns all cards for a specific user'));

router.get('/card/:id', (req, res) => res.send('Returns a specific card.'));

router.post('/card/', (req, res) => res.send('Creates a card.'));

router.put('/card/:id', (req, res) => res.send('Edits a card.'));

router.delete('/card/:id', (req, res) => res.send('Deletes a card.'));

export default router;