// Ist das Schema wie es in der Datenbank dann aussieht

import { Schema, Document, model, ObjectId } from "mongoose";

export type User = {
    username: string;
    email: string;
    password: string;
}

export type UserDocument = Document<ObjectId> & User;

export const UserSchema = new Schema<UserDocument> ({
    username: { type: String, unique: true, required: true },       //unique: Ist nur in der Collection einzigartig
    email: { type: String, unique: true, reireed: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

export const UserModel = model<UserDocument>("User", UserSchema);