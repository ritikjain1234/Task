const express = require("express");
const connectDb = require("./db/conn");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 9000;
const router = require("./routers");

app.use(cors());
app.use(express.json());
app.use(router);
const start = () => {
    try {
        connectDb();
        app.listen(PORT,async(req,res)=>{
            console.log(`connect the server with port no:${PORT}`);
        });
    }catch (error){
        console.log(error);
    }
}
start();