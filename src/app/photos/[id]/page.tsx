import { notFound } from 'next/navigation';
import axios from 'axios';
import { Photo } from '@modules/photo/entity/photo.entity';
import { ListPhotoDto } from '@modules/photo/dto/listPhoto.dto';
import { Card } from '@ui-kit/ui/Card';
import { Title } from '@ui-kit/ui/Font';
import Image from 'next/image';
import { Button } from '@ui-kit/ui/Button';
import { LinkApp } from '@ui-kit/ui/LinkApp';
import { ArrowLeftIcon } from '@ui-kit/icons/arrow/arrow-left.icon';

interface PageProps {
  params: Promise<{ id: string }>;
}

const photoApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
});

// Генерируем только 10 самых популярных страниц
export async function generateStaticParams() {
  try {
    const response = await photoApi.get<Photo[]>('/photos');
    
    if (Array.isArray(response.data)) {
      return response.data.map((photo: Photo) => ({
        id: photo.id.toString(),
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}

// ISR: остальные страницы генерируются по запросу и кэшируются
export const revalidate = 60;

async function getPhotoData(id: string): Promise<Photo | null> {
  try {
    const response = await photoApi.get<ListPhotoDto>(`/photos/${id}`);
    
    return response.data.hits[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return null;
      }
      console.error('Axios error fetching photo:', error.message);
    }
    return null;
  }
}

export default async function PhotoPage({ params }: PageProps) {
  const { id } = await params;
  const photo = await getPhotoData(id);

  if (!photo) {
    notFound();
  }

  return (
    <Card variant={"ghost"} className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <header className="mb-6">
          <Title level="h2">
            {photo.user} - Photo #{photo.id}
          </Title>
          <div className="flex gap-4 mt-2 text-sm text-gray-600">
            <span>👁️ {photo.views} views</span>
            <span>❤️ {photo.likes} likes</span>
            <span>💬 {photo.comments} comments</span>
            <span>📥 {photo.downloads} downloads</span>
          </div>
          {photo.tags && (
            <div className="mt-2">
              <span className="text-gray-500">Tags: </span>
              {photo.tags.split(',').map((tag, index) => (
                <span key={index} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </header>
        
        <div className="mb-6">
          <Image 
            width={photo.webformatWidth}
            height={photo.webformatHeight}
            src={photo.largeImageURL || photo.webformatURL} 
            alt={`Photo by ${photo.user}`}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            property='lazy'
          />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
          <div>
            <strong>Type:</strong> {photo.type}
          </div>
          <div>
            <strong>Size:</strong> {photo.imageSize ? `${(photo.imageSize / 1024 / 1024).toFixed(2)} MB` : 'N/A'}
          </div>
          <div>
            <strong>Dimensions:</strong> {photo.imageWidth}x{photo.imageHeight}
          </div>
          <div>
            <strong>User:</strong> {photo.user}
          </div>
        </div>

        <Card className='flex justify-between'>
          <Button variant={"ghost"}>
            <LinkApp variant={"ghost"} href={`/photos`} icon={<ArrowLeftIcon />} iconPosition={"left"}>
              Назад
            </LinkApp>
          </Button>
          <Button variant={"success"}>
            <LinkApp variant={"primary"} href={photo.largeImageURL || photo.webformatURL} target="_blank" rel="noopener noreferrer">
              Открыть в новом окне
            </LinkApp>
          </Button>
        </Card>
      </article>
    </Card>
  );
}