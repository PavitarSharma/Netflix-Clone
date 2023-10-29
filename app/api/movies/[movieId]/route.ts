import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { movieId: string } }
) {
  const { movieId } = params;

  try {
    if (typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }

    if (!movieId) {
      throw new Error("Invalid ID");
    }

    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new Error("Invalid ID");
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
