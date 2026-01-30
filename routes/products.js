const express = require('express');
const productService = require('../services/serviceProducts');
const router = express.Router()
const validatorHendler = require('../middleware/validator.handler');
const {schemaProductCreate, schemaProductUpdate, schemaProductGet} = require('../schema/schema.product');

router.get('/', async (req,res,next)=>{
    try{
        const products = await productService.getAllProducts(req, res);
        res.json(products);
    } catch (error) {
        next(error);
    }
})

router.post('/', 
    validatorHendler(schemaProductCreate, 'body'),
    async (req,res)=>{
    await productService.createProduct(req, res);
})

router.patch('/:id',
    validatorHendler(schemaProductGet, 'params'),
    validatorHendler(schemaProductUpdate, 'body'),
    async (req,res)=>{
    const updateProduct = await productService.updateProduct(req, res);
    res.json(updateProduct);
})

router.delete('/:id', async (req,res)=>{
    await productService.deleteProduct(req, res);
})

router.get('/:id', validatorHendler(schemaProductGet, 'params'),
    
    async (req,res)=>{
        const getOneProduct = await productService.getOneProduct(req, res);
        return getOneProduct;
})

module.exports = router;