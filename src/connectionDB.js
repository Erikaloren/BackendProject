import mongoose from "mongoose";

mongoose.connect(process.env.CONECTION_TO_DB_URI).then((dato)=>{
    console.log("bien, conectado a la base de datos");
}).catch ((error) =>{
    console.log("mal, ocurrió un error", error);
});