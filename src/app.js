import express from "express";
import creating_routes from "./routes/creating_routes.js";
import morgan from "morgan";


const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', function (req, res){
    res.json({mensaje: "works!"});
})

export default app;