import {Document} from 'mongoose';


export class Login extends Document{
    name: String;
    email: String;
    password: String;
}
