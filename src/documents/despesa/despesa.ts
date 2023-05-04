import {Document} from 'mongoose';

export class Despesa extends Document{
    name: String;
    contact: Number;
    services: String;
    value: Number;
    date: Date;
}
