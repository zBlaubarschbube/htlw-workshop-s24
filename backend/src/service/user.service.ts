import { User, UserModel } from '../model/user.model';

export async function createUser(
    user: User
){
    try{
        const UserDocument = await UserModel.create(user);
        console.log("{User Service | Create User} Successfully created user with id " + UserDocument.id);
        return UserDocument;
    }catch(e) {
        console.log(e);
        throw(e);
    }
}

export async function getUser(
    id: string
) {
    try{
        const user = await UserModel.findById(id);

        if (!user) {
            throw new Error(`Could not find user with ${id}`);
        }

        return user;
    }catch (e) {
        console.error(`{User Service | Get User} - Error getting user`);
        throw e;
    }
}