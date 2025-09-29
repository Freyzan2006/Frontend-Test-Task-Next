import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    
    const mockUploadedPhoto = {
      id: Date.now().toString(),
      url: URL.createObjectURL(file),
      title: file.name,
    };
    
    return NextResponse.json(mockUploadedPhoto);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to upload photo' },
      { status: 500 }
    );
  }
}