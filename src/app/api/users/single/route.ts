// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// const JWT_SECRET = process.env.JWT_SECRET_KEY || "";
// import jwt from "jsonwebtoken";
// const prisma = new PrismaClient();

// export async function POST(req: NextRequest) {
//   const bearerToken = req.headers.get("authorization");
//   const token = bearerToken?.split(" ")[1];
//   if (!token) {
//     return NextResponse.json({ error: "Unauthorized due to missing token" });
//   }
//   const isTokenValid = jwt.verify(token, JWT_SECRET);
//   if (!isTokenValid) {
//     return NextResponse.json({ error: "Unauthorized due to invalid token" });
//   }
//   const { username } = await req.json();
//   const newUser = await prisma.user.create({
//     data: { username: username },
//   });
//   return NextResponse.json(newUser);
// }

// export async function GET(req: NextRequest, res: NextResponse) {
//   const bearerToken = req.headers.get("authorization");
//   const token = bearerToken?.split(" ")[1];
//   if (!token) {
//     return NextResponse.json({ error: "Unauthorized due to missing token" });
//   }
//   const isTokenValid = jwt.verify(token, JWT_SECRET);
//   if (!isTokenValid) {
//     return NextResponse.json({ error: "Unauthorized due to invalid token" });
//   }
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get("id");

//   const user = await prisma.user.findUnique({
//     where: { id: Number(id) },
//   });
//   return NextResponse.json(user);
// }
