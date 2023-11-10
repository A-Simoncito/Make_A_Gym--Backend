import {Request, Response} from "express";

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

export function getProducts(_,res: Response) {
    res.send (ProductoYmercancia)
}