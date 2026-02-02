const faker = require("faker");
const boom = require("@hapi/boom");

const getAllProducts = async (req, res) => {
    // const price = allPrice()
  try {
    
    const products = [];
    const { size } = req.query;
    const limit = size || 5;
    for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
      });
    }
    return products;
  } catch (error) {
    console.log(error);
  }
};
const createProduct = (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    res.json({
      message: "Producto creado correctamente",
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    // if(id!=1){
    //   throw boom.notFound("Id no encontrado");
    // }
    const body = req.body;
    res.json({
      message: "Producto actualizado correctamente",
      product: body,
      id,
    })
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: "Producto eliminado correctamente",
      id: id,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      id: id,
      name: "Teclado",
      price: 29.99,
    category: "Electrónica",
  });
} catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
