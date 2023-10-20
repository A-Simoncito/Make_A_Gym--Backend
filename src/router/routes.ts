import {Router} from "express";
const router: Router = Router();       // instancia 
router.get ("/", (_, res) => {   //ruta,res. sol. raiz, 
    res.send ("Se mudo, funca");  //parametro
});

export default router