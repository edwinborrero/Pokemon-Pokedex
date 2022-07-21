import { Router } from 'express';
import PokeModel from '../../models/pokemon-model';

const routes = new Router();

routes.get('/api/pokemon', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/:region', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({region: req.params.region}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/:dexNumber', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: req.params.dexNumber}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});