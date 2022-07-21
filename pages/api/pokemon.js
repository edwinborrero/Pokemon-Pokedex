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

routes.get('/api/pokemon/kanto', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 1, $lte: 151}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/johto', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 152, $lte: 251}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/hoenn', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 252, $lte: 386}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/sinnoh', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 387, $lte: 493}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/unova', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 494, $lte: 649}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/kalos', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 650, $lte: 721}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/alola', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 722, $lte: 809}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/galar', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 810, $lte: 898}}));
    } catch{
        return res.status(404).json({ error: true, message: 'Not found Pokemon'});
    }
});

routes.get('/api/pokemon/hisui', async (req, res) => {
    try{
        return res.status(200).json(await PokeModel.find({dexNumber: { $gte: 899, $lte: 905}}));
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