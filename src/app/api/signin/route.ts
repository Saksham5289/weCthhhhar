import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET_KEY || "";
console.log(JWT_SECRET, "from backend ");
export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  //   const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "No user found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ error: "Password Incorrect" });
  }

  const token = jwt.sign({ id: user.id, name: user.username }, JWT_SECRET);
  return NextResponse.json({ user, token });
}
