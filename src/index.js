import "dotenv/config";
import "./connectionDB.js";
import app from "./app.js";

app.listen(3001, ()=> {
    console.log("servidor corriendo puerto 3001");
});

