import express from 'express';
import userRouter from "./user.router"

const router = express.Router();

//Macht folgendes: Für die folgenden Pfad nimmst du die middleware
router.use("/user", userRouter);

export default router;      //Wenn file exportiert wird, dass wir router zurück bekommen