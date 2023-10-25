import {Router} from "express";
// import express from "express";
// const app = express();

const router: Router = Router();       // instancia 
router.get ("/", (_, res) => {   //ruta,res. sol. raiz, 
    res.send ("El servidor anda en / ");  //parametro
});

export default router


const  ProductoYmercancia = [
    {
      nombre: "Bicicleta",
      modelo: "Modelo A",
      precio: 900,
      paisOrigen: "Hungria",
    },
    {
      nombre: "Teclado ReDragon",
      modelo: "Modelo RGB",
      precio: 90,
      paisOrigen: "EE.UU",
    },
    {
      nombre: "Nissan GTR",
      modelo: "Nismo",
      precio: 9800,
      paisOrigen: "Japon",
    },
];


//punto 1
router.get('/punto1', (_, res) => {
    res.send(ProductoYmercancia);
});
        
//punto 2
router.get('/punto2', (_, res) => {
    const punto2 = ProductoYmercancia.filter(producto => producto.precio > 100);
    res.send(punto2);
});

//punto 3

