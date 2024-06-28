import express from 'express';
import { createUserHandler, getUserHandler } from '../controller/user.controller';
import { validate } from '../middleware/validation';
import { createUserSchema, getUserSchema } from '../schema/user.schema';

const router = express.Router();

router.get('/:id', validate(getUserSchema), getUserHandler)

router.post('/', validate(createUserSchema), createUserHandler);

export default router;      //Wenn file exportiert wird, dass wir router zurück bekommen


//ALT

/*import { pick } from 'lodash';

import { createUserSchema } from '../schema/user.schema';
import { UserDocument, UserModel } from '../model/user.model';

// @path /user
const router = express.Router();

router.get('/', (reqest, response) => {
    response.status(200).send("Hello, World!");
});

router.post('/', async (req, res) => {
    const validated = createUserSchema.safeParse(req.body);

    console.log(req.body);

    if (validated.success) {

        try {
            const user = await UserModel.create(validated.data)     //await, weil es ein Datenbank zugriff ist

            res.status(200).json(pick<UserDocument>(user, "username", "email", "_id"));
        }catch (e) {
            console.log(e);
            return res.status(400).send(e);
        }
        
    }
    else {
        res.status(400).json({
            error: "Malformed request body"
        })
    } 

    /**
     * We're expecting the following bdy:
     * {
     *    username: string,
     *    email: string,
     *    password: string
     * }
     */
//});

//export default router;      //Wenn file exportiert wird, dass wir router zurück bekommen