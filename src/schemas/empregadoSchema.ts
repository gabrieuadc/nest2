import * as mongoose from 'mongoose';

export const EmpregadoSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  service: String,
  salar: Number,
  adm: Date,
})
