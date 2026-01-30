const express = require('express');
const serviceUsers = require('../services/servicesUser');

const router = express.Router()

router.get('/', async(req,res)=>{
    const getUsers = await serviceUsers.getAllUsers(req, res);
    return getUsers;
})

module.exports = router;