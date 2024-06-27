import express from 'express';

import envUtil from './util/env.util';
import { request } from 'http';
import router from './routes';

console.log(envUtil.PORT);
console.log(typeof envUtil.PORT);

const app = express();

//midleware parst json und fügt body ein
app.use(express.json());
app.use("/", router);


            //Callback function
app.listen(envUtil.PORT, () => {
    console.log('Server started.');
});
