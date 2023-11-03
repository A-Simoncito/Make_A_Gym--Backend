
import express from "express";
import router from "./router/routes"

const app = express ();
const port = 8080

app.use (express.json());
app.use ("/", router)

app.listen(port, () => {
    console.log("El servidor anda")
});