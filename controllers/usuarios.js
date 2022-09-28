const { response, request } = require ('express');

const usuariosGet = (req,res = response) => {
    const {q , nombre , apikey = 'NONE' , page , limit} = req.query;


    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
       
    });
}

const usuariosPut = (req,res = response) => {

    const {id} = req.params;
    res.json({
        msg: 'put API - controlador',
        id 
    
    });
}

const usuariosPost = (req,res) => {
    const {nombre , edad} = req.body;

    res.status(200).json({
        msg: 'post API - controlador',
        nombre , edad
    });
}


const usuariosDelete = (req,res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}





module.exports= {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}