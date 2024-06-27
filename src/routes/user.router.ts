import express from 'express';

// @path /user
const router = express.Router();

router.get('/', (reqest, response) => {
    response.status(200).send("Hello, World!");
});

export default router;      //Wenn file exportiert wird, dass wir router zurück bekommen