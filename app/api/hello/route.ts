import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "views.json");

function getViews(): Record<string, number> {
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function saveViews(views: Record<string, number>) {
  fs.writeFileSync(filePath, JSON.stringify(views));
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const views = getViews();
  return NextResponse.json({ views: views[id] || 0 });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const views = getViews();
  views[id] = (views[id] || 0) + 1;
  saveViews(views);
  return NextResponse.json({ views: views[id] });
}