require('dotenv').config()
import express from "express";
import router from './routes/index';
//import {} from './prisma/shema'
const app =  express();
const port = process.env.PORT || 3757;
app.use(express.json());

const start = async () =>{
    try {
        app.use('/api', router);
        app.listen(port, () => {
            console.log(`Server is working on PORT ${port}`);
        });
    }
    catch(e) {
        console.log(e);
    }
};

start();