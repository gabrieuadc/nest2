import {Document} from 'mongoose';

export class Custo extends Document{
    mpd: Number;
    mod: Number;
    cif: Number;
    cpp: Number;
    date: Date;
}
