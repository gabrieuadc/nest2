import * as mongoose from 'mongoose';

export const EstoqueSchema = new mongoose.Schema({
  prod: String,
  un: String,
  qtd: Number,
  value: Number,
  date: Date,
})
