const express = require('express');
const faker = require('faker');

const router = express.Router()

router.get('/', (req,res)=>{
    const products = []
    const {size}=req.query;
    const limit = size || 5;
    for(let index=0;index<limit;index ++){
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price()),
            image: faker.image.imageUrl()
        })
    }
    res.json(products);
})

router.post('/', (req,res)=>{
    const body = req.body;
    console.log(body);
    res.json({ 
        message: 'Producto creado correctamente',
        data: body
    });
})

router.patch('/:id', (req,res)=>{
    const {id} = req.params;
    const body = req.body;
    res.json({
        message: 'Producto actualizado correctamente',
        product: body,
        id: id
    });
})

router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    res.json({
        message: 'Producto eliminado correctamente',
        id: id
    });
})

router.get('/:id', (req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    res.json({
        'id': id,
        'name': 'Teclado',
        'price': 29.99,
        'category': 'Electrónica'
    })
})

module.exports = router;