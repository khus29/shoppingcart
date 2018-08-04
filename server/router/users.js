import express from 'express';
import Users from '../models/Users';

const router = express.Router();

router.get('/', (req,res) => {
    res.send({data: []});
})

export default router;