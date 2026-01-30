const Joi = require("joi");

const id = Joi.string().uuid() // genera un id aleatorio con formato UUID
const name = Joi.string().min(3).max(10)
const price = Joi.number().integer().min(10)

const schemaProductCreate = Joi.object({
    name: name.required(),
    price: price.required()
})

const schemaProductUpdate = Joi.object({
    name: name,
    price: price
})

const schemaProductGet = Joi.object({

    id: id.required()
})

module.exports = { schemaProductCreate, schemaProductUpdate, schemaProductGet };