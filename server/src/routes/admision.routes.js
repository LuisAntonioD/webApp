import { Router } from "express";
const router = Router();

/* 
  #####                                                                       
 #     #  ####  #    # ##### #####   ####  #      #      ###### #####   ####  
 #       #    # ##   #   #   #    # #    # #      #      #      #    # #      
 #       #    # # #  #   #   #    # #    # #      #      #####  #    #  ####  
 #       #    # #  # #   #   #####  #    # #      #      #      #####       # 
 #     # #    # #   ##   #   #   #  #    # #      #      #      #   #  #    # 
  #####   ####  #    #   #   #    #  ####  ###### ###### ###### #    #  ####  
                                                                              
*/
import * as admisionCtrl from '../controllers/admision.controller.js';

/*
 #     #                                                                  
 ##   ## # #####  #####  #      ###### #    #   ##   #####  ######  ####  
 # # # # # #    # #    # #      #      #    #  #  #  #    # #      #      
 #  #  # # #    # #    # #      #####  #    # #    # #    # #####   ####  
 #     # # #    # #    # #      #      # ## # ###### #####  #           # 
 #     # # #    # #    # #      #      ##  ## #    # #   #  #      #    # 
 #     # # #####  #####  ###### ###### #    # #    # #    # ######  ####  
*/
import { authJwt } from "../middlewares/index.js";


//Establecer ruta admision mediante el metodo GET
router.get('/',admisionCtrl.getAdmisiones);
router.get('/:admisionId', admisionCtrl.getAdmisionById);
router.post('/',[authJwt.verifyToken, authJwt.isAdmin], admisionCtrl.createAdmision);
router.put('/:admisionId', [authJwt.verifyToken, authJwt.isAdmin],admisionCtrl.updateAdmision);
router.delete('/:admisionId',[authJwt.verifyToken, authJwt.isAdmin], admisionCtrl.deleteAdmision);
// Nueva ruta para relacionar una oferta educativa con admisiones
router.get('/:admisionId/ofertas', admisionCtrl.getRelatedOffers);
router.get('/:admisionId/offers', admisionCtrl.getOffersByAdmisionId)


export default router;
