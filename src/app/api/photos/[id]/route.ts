


import { Environment } from '@core/config/environment.core';
import { PhotoApi } from '@modules/photo/api/photo.api';
import { NextRequest, NextResponse } from 'next/server';

// Создаем экземпляр API напрямую
const photoApi = new PhotoApi();

// GET /api/photos/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; 
    const env = new Environment();
    const apiKey = env.get('NEXT_PUBLIC_API_PIXABAY_KEY');

    
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
    console.error('Error fetching photo:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photo' },
      { status: 500 }
    );
  }
}

// DELETE /api/photos/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; 
    
    
    console.log(`Deleting photo with id: ${id}`);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete photo' },
      { status: 500 }
    );
  }
}