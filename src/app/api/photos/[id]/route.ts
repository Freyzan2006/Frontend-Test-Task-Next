import { Environment } from '@core/config/environment.core';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
        
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete photo' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const env = new Environment();
    const apiKey = env.get('NEXT_PUBLIC_API_PIXABAY_KEY');
    const { id } = params;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }
    
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&id=${id}`
    );
    
    if (!response.ok) {
      throw new Error('Pixabay API error');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch photo from Pixabay' },
      { status: 500 }
    );
  }
}