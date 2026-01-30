const getAllUsers = (req, res) => {
        const {limit, offset} = req.query; // limit es la cantidad de usuarios a devolver, offset es desde qué usuario empezar
    if(limit && offset){
        res.json({
            limit,
            offset
        })
    } else {
        res.send('No se han proporcionado parámetros de consulta');
    }  
}

module.exports = {
    getAllUsers
};
