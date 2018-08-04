import express from 'express';
import Cart from '../models/Cart';
const router = express.Router();


router.get('/', (req,res) => {
    res.send({data: []});
})

router.post('/add', (req,res) => {
    const cart = new Cart(req.body);
    cart.save().then(cart => {
        res.json('Cart added successfully');
    })
    .catch(err => {
        res.status(400).json("Error while creating the Cart "+err);
    });
})
router.get('/:userId', (req,res) => {
    const userId = req.params.userId;
    Cart.find({'userId':userId}, function(err, cartData){
        res.json(cartData);
    });
})
export default router;