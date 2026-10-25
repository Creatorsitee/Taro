import { NextResponse } from "next/server";
import Anilist from "@consumet/extensions/dist/providers/meta/anilist";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  try {
    const provider = new Anilist();
    const result = await provider.search(query);
    return NextResponse.json({ results: result?.results ?? [] });
  } catch {
    return NextResponse.json({ results: [], error: "Search temporarily unavailable" }, { status: 502 });
  }
}
