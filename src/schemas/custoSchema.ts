import * as mongoose from 'mongoose';

export const CustoSchema = new mongoose.Schema({
  mpd: Number,
  mod: Number,
  cif: Number,
  cpp: Number,
  date: Date,
})