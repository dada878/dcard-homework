import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const result = await fetch("https://api.github.com/repos/dada878/dcard-homework/issues");
  const data = await result.json();
  return NextResponse.json(data);
}
