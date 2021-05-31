const express = require('express');
const { updateOne } = require('../model/Bulletin.js');
const Bulletins = require('../model/Bulletin.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const getBulletins = await Bulletins.find();
        res.json(getBulletins)

    } catch (error) {
        res.json({message:error})
    }
});


router.get('/:id', async (req, res) => {
    try {
        const found = await Bulletins.findOne({_id: req.params.id});
        res.json(found);
    } catch (error) {
        res.json({message: error})
    }
});


router.post('/', async (req, res) => {
    const bulletin = new Bulletins({
        title: req.body.title,
        body: req.body.body,
        date: Date.now()
    })  
    
    try {
        const createBulletin = await bulletin.save(); 
        res.json(createBulletin);
    } catch (error) {
        res.json({message: 'there is an error with your post'});
    }
});


router.patch('/:id', async (req, res) => {
     try {
        const updateBulletin =  await Bulletins.updateOne({_id: req.params.id}, {body: req.body.body});
        res.json(updateBulletin);
    } catch (error) {
        res.json({message: error});
    }
});


router.delete('/:id', async (req, res) => {
     try {
        const deleteBulletin = await Bulletins.deleteOne({_id: req.params.id});
        res.json(deleteBulletin);
    } catch (error) {
        res.json({message: error});
    }
});



module.exports = router;
