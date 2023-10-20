
import express from "express";
import router from "./router/routes"

const app = express ();
const port = 8080

// app.get ("/", (_,res) => { //manda la respuesta 
//     res.send("STEAM bajo los impuestos");
// });

app.use ("/", router)

app.listen(port, () => {
    console.log("El servidor anda")
});