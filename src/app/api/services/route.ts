import { NextResponse } from 'next/server';
import { db } from '@/lib/serverStore';

export async function GET() {
  const results = db.getServices();
  return NextResponse.json({ results, count: results.length });
}
