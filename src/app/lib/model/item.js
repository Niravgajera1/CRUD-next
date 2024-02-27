import mongoose from "mongoose";

const itemModel = new mongoose.Schema({
  name: String,
  price: String,
  color: String,
  company: String,
  category: String,
});

export const item = mongoose.models.items || mongoose.model("items", itemModel);
