import * as mongoose from 'mongoose';

export const ServiceSchema = new mongoose.Schema({
  name: String,
  contact: Number,
  service: String,
  value: Number,
  date: Date,
})
