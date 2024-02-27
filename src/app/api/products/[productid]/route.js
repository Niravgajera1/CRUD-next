import { connectionstr } from "@/app/lib/db";
import { item } from "@/app/lib/model/item";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const productId = content.params.productid;
  console.log(content);
  const filtter = { _id: productId };
  const payload = await request.json();
  //   console.log(payload);
  await mongoose.connect(connectionstr);
  const result = await item.findOneAndUpdate(filtter, payload);
  console.log(result);
  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const productId = content.params.productid;
  const filtter = { _id: productId };
  await mongoose.connect(connectionstr);
  const result = await item.findById(filtter);
  console.log(result);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const productId = content.params.productid;
  const filtter = { _id: productId };
  await mongoose.connect(connectionstr);
  const result = await item.deleteOne(filtter);
  return NextResponse.json({ result, success: true });
}
