import type { Request, Response } from "express";
import { pick } from 'lodash';
import { createUser, getUser } from "../service/user.service";
import { CreateUserInput, GetUserInput } from "../schema/user.schema";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response
) {

    //Braucht man nicht mehr, weil wir jetzt alles in der middleware gemacht haben. (in validation.ts)

    /*console.log(req.body);
    const validated = createUserSchema.safeParse(req.body);
    console.log(validated.success);
    if(validated.success) {
        try{
            //const user = await createUser(validated.data);
            const user = await createUser(req.body);
            res.status(200).json(pick(user, "username", "email", "_id"));       //Es werden nicht alle Daten zurückgegeben, sondern dann nur die, die da auch drinnen stehen. Also Benutzername, email und id von user
        }catch(e){
            console.log(e);
            return res.status(400).send(e);
        }
    }
    else {
        res.status(400).json({
            error: "malformed request body"
        });
    }*/

    try{
        //const user = await createUser(validated.data);
        const user = await createUser(req.body);
        res.status(200).json(pick(user, "username", "email", "_id"));       //Es werden nicht alle Daten zurückgegeben, sondern dann nur die, die da auch drinnen stehen. Also Benutzername, email und id von user
    }catch(e){
        console.log(e);
        return res.status(400).send(e);
    }
}

export async function getUserHandler (
    req: Request<GetUserInput["params"]>,
    res: Response
){
    try {
        const user = await getUser(req.params.id);

        return res.status(200).json(
            pick(user, "_id", "username", "email")
        );
    } catch (e) {
        return res.status(400).json({
            message: "User not found",
            error: e
        })
    }
}