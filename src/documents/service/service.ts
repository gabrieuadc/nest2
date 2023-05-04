import {Document} from 'mongoose';


export class Service extends Document{
    name: String;
    contact: Number;
    service: String;
    value: Number;
    date: Date;
}
