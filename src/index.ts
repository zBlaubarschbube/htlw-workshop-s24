import express from 'express';
import cors from 'cors';

import envUtil from './util/env.util';
import router from './routes';
import mongoose from 'mongoose';

console.log(envUtil.PORT);
console.log(typeof envUtil.PORT);

const app = express();

//midleware parst json und fügt body ein
app.use(express.json());

//Durch die cors Middleware werden alle cors sachen akzeptiert.     Damit alle Domäne akzeptiert werden
app.use(cors());

app.use("/", router);


            //Callback function
app.listen(envUtil.PORT, async() => {
    await mongoose.connect(envUtil.MONGO_URL);

    console.log('Connected to MongoDB');
    console.log('Server started.');

    /*const car = {
        branad: "BMW",
        color: "orange",
    }

    const car2 = {
        /*brnad: car.branad,
        color: car.color,*/ //Statt dem kann man auch folgendes Schreiben:
        /*...car,     //Ist ein Spreadoperator
        motor: "N55"
    }*/
});
