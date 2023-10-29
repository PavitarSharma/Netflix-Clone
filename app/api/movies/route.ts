import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const movies = await prisma.movie.findMany();

    return NextResponse.json(movies, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
