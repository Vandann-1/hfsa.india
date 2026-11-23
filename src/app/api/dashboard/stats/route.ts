import { NextResponse } from 'next/server';
import { db } from '@/lib/serverStore';

export async function GET() {
  const metrics = db.getMetrics();
  const recent_enquiries = db.getEnquiries().slice(0, 8);

  return NextResponse.json({
    metrics,
    recent_enquiries,
  });
}
