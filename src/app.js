import express from "express";
import creatingRoutes from "./routes/creating_routes.js"
import morgan from "morgan";
import cors from "cors"


const app = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(express.json());
app.use('/payments', creatingRoutes);


app.get('/', function (req, res){
    res.json({mensaje: "works!"});
})

export default app;