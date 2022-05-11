const express = require( 'express' );
const PirataRouter = express.Router();
const Piratacontroller = require( './../controladores/pirata.controller');

PirataRouter.post ('/pirate/new', Piratacontroller.crearPirata);
PirataRouter.get ( '/pirates', Piratacontroller.getAllPiratas);
PirataRouter.get ( '/pirate/:id', Piratacontroller.getOnePirata);
PirataRouter.delete ( '/delete/:id', Piratacontroller.deletePirata);
PirataRouter.put ('/actualizar/:id', Piratacontroller.updatePirata);

module.exports = PirataRouter;