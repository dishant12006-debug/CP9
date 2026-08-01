import { NextRequest, NextResponse } from 'next/server';
import { addContact } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    // Validate required fields
    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json(
        { error: 'All fields (name, email, service, budget, message) are required.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const saved = await addContact({ name, email, service, budget, message });

    return NextResponse.json({ success: true, submission: saved }, { status: 201 });
  } catch (error: any) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to save contact submission.' },
      { status: 500 }
    );
  }
}
