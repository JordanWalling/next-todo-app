import { ConnectDb } from "@/lib/config/db";
import { NextResponse } from "next/server";

const LoadDb = async () => {
  await ConnectDb();
};

LoadDb();

export async function GET(request) {
  return NextResponse.json({ message: "Get Method Hit" });
}
