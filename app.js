const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const publicPatch = path.resolve(__dirname, "./public");
app.use(express.static(publicPatch));

app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/index.html"))
     }
     );

app.get("/registro", (req, res) => {
     res.sendFile(path.join(__dirname, "/views/register.html")) 
    }
    );

app.get("/carrito", (req, res) => { res.sendFile(path.join(__dirname, "/views/productCart.html")) });

app.get("/login", (req, res) => { res.sendFile(path.join(__dirname, "/views/login.html")) });

app.get("/detalleProducto", (req, res) => { res.sendFile(path.join(__dirname, "/views/productDetail.html")) });

app.listen(port, () => console.log("Escuchando en puerto " + port));