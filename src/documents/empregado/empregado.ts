import {Document} from 'mongoose';

export class Empregado extends Document{
    name: String;
    contact: Number;
    service: String;
    salar: Number;
    adm: Date;
}
