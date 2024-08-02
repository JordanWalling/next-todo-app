import { ConnectDb } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDb = async () => {
  await ConnectDb();
};

LoadDb();

export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}
export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ message: "Todo Created" });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await TodoModel.findByIdAndDelete(id);

  return NextResponse.json({ message: "Todo Deleted" });
}

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");

  await TodoModel.findByIdAndUpdate(id, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ message: "Todo Updated" });
}
