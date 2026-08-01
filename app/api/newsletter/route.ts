import { NextRequest, NextResponse } from 'next/server';
import { addNewsletter } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const result = await addNewsletter(email);

    if (result.alreadyExists) {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter!' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe.' },
      { status: 500 }
    );
  }
}
