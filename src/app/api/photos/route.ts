import { Environment } from '@core/config/environment.core';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const env = new Environment();
    const apiKey = env.get('NEXT_PUBLIC_API_PIXABAY_KEY');

    console.log(apiKey)
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }
    
    const response = await fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo`
    );
    
    if (!response.ok) {
      throw new Error('Pixabay API error');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch photos from Pixabay' },
      { status: 500 }
    );
  }
}