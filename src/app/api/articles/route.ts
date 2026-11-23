import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/serverStore';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;

  const results = db.getArticles(category);
  return NextResponse.json({ results, count: results.length });
}
