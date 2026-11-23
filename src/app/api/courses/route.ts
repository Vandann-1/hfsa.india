import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/serverStore';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || undefined;
  const level = searchParams.get('level') || undefined;
  const mode = searchParams.get('delivery_mode') || undefined;
  const eosh = searchParams.get('eosh') === 'true';

  const results = db.getCourses(category, level, mode, eosh);
  return NextResponse.json({ results, count: results.length });
}
