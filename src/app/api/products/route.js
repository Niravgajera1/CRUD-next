import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionstr } from "@/app/lib/db";
import { item } from "@/app/lib/model/item";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionstr);
    data = await item.find();
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
  let payload = await request.json();
  await mongoose.connect(connectionstr);
  let items = new item(payload);
  let result = await items.save();
  return NextResponse.json({ result, success: true });
}

