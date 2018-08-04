import express from 'express';
import Products from '../models/Products';
const router = express.Router();

//Get all products for a section - women/men/kids
router.get('/:param', (req,res) => {
    const param = req.params.param;
    let query = {};
    if(param === 'women' || param === 'men' || param === 'kids') { //do something about hardcoding
        query = {'section':param};
    }else {
        query = {'productId':param}
    }
    Products.find(query, function(err, products){
        res.json(products);
    }).sort({'productId': 1});
})

export default router;