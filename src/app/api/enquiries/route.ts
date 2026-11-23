import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/serverStore';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || undefined;
  const type = searchParams.get('enquiry_type') || undefined;
  const search = searchParams.get('search') || undefined;

  const results = db.getEnquiries(status, type, search);
  return NextResponse.json({ results, count: results.length });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.full_name || !body.email || !body.phone || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be supplied.' },
        { status: 400 }
      );
    }

    const created = db.addEnquiry({
      full_name: body.full_name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      organization: body.organization?.trim() || '',
      enquiry_type: body.enquiry_type || 'general',
      course_name: body.course_name?.trim() || '',
      subject: body.subject.trim(),
      message: body.message.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out to Haridra Food Safety Assurance. Your enquiry has been received and prioritized by our technical team.',
        data: created,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Server processing error.' },
      { status: 500 }
    );
  }
}
