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

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const views = getViews();
  return NextResponse.json({ views: views[params.id] || 0 });
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const views = getViews();
  views[params.id] = (views[params.id] || 0) + 1;
  saveViews(views);
  return NextResponse.json({ views: views[params.id] });
}