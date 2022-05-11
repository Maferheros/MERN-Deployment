const Pirata = require ('../modelos/pirata.model');

const crearPirata = (request, response) => {
    Pirata.create (request.body)
        .then(pirata => response.json (pirata))
        .catch (err => response.status(400).json(err));
}

const getAllPiratas = (request, response) => {
    Pirata.find().collation({locale: "en"}).sort({nombre: 1})
        .then (piratas => response.json(piratas))
        .catch(err => response.status(400).json(err));
}

const getOnePirata = (request, response) => {
    Pirata.findOne({_id:request.params.id})
        .then(pirata => response.json(pirata))
        .catch (err => response.status(400).json(err));
}

const deletePirata = (request, response) => {
    Pirata.deleteOne({_id: request.params.id})
    .then(() => {
        return response.status(204).end();
    })
    .catch ( err=> {
        response.statusMessage = "Hubo error al ejecturar el delete" + err; 
        return response.status(400).end();
    });
}

const updatePirata = (request, response) => {
    Pirata.findByIdAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
    .then (pirata => response.json(pirata))
    .catch (err => response.status(400).json(err));
}


const Piratacontroller = {
    crearPirata,
    getAllPiratas,
    getOnePirata,
    deletePirata,
    updatePirata
};

module.exports = Piratacontroller;