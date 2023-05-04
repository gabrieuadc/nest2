import {Document} from 'mongoose';


export class Estoque extends Document{
    prod: String;
    un: String;
    qtd: Number;
    value: Number;
    date: Date;
}
