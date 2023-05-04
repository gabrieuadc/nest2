import * as mongoose from 'mongoose';

export const DespesaSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  services: String,
  value: Number,
  date: Date,
})
