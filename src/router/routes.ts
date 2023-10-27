import {Router} from "express";
import express, {Request, Response} from "express";

// import express from "express";
// const app = express();

const router: Router = express.Router();       // instancia 
router.get ("/", (_, res) => {   //ruta,res. sol. raiz, 
    res.send ("El servidor anda en / ");  //parametro
});

export default router


let  ProductoYmercancia = [
    {
      nombre: "Cuatri 4X4",
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

//punto 4
router.get('/punto4/:modelo', (req, res) => {
  const { modelo } = req.params;
  const longitud = ProductoYmercancia.length;

  ProductoYmercancia = ProductoYmercancia.filter(producto => producto.modelo !== modelo);
  console.log("Funca");
  
  if (ProductoYmercancia.length === longitud) {
    res.status(404).send("No se encontró el producto");
  } else {
    res.send("Se eliminó el producto");
  }
});
    

//Punto 5
router.get ('/punto5/:pais' ,(req: Request, res: Response) => {
  const { pais } =req.params;
  const encontrarProdcuto = ProductoYmercancia.find(producto => producto.paisOrigen ===pais);

  if (encontrarProdcuto) {
    res.send(encontrarProdcuto);
  } else {
    res.status(404).send ("No se encontro el producto");
  }
});

//Punto 6
router.get('/punto6/:precio', (req: Request, res: Response) => {
  const { precio } = req.params;
  const buscarPrecio = ProductoYmercancia.filter(producto => producto.precio === parseInt(precio));

  if (buscarPrecio.length > 0) {
    res.send(buscarPrecio);
  } else {
    res.status(404).send("No se encontró el precio");
  }
});

//punto 7

