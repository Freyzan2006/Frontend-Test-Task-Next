'use client';

import { useQuery } from '@tanstack/react-query';
import { PhotoService } from '../service/photo.service';
import { usePhotoContainer } from '../di';

export const usePhotos = () => {
  const container = usePhotoContainer();
  const photoService = container.get(PhotoService);

  return useQuery({
    queryKey: ['photos'],
    queryFn: () => photoService.findAllPhoto(),
    staleTime: 5 * 60 * 1000, 
  });
};