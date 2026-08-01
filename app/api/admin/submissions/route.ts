import { NextResponse } from 'next/server';
import { getAllContacts, getAllNewsletter } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [contacts, newsletter] = await Promise.all([
      getAllContacts(),
      getAllNewsletter(),
    ]);

    return NextResponse.json({ success: true, contacts, newsletter });
  } catch (error: any) {
    console.error('Admin submissions API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to retrieve submissions.' },
      { status: 500 }
    );
  }
}
