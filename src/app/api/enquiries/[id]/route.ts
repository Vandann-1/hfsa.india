import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/serverStore';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ success: false, message: 'Invalid ID' }, { status: 400 });
    }

    const body = await request.json();
    const updated = db.updateEnquiry(id, body);

    if (!updated) {
      return NextResponse.json({ success: false, message: 'Enquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
