'use client';

import { useQuery } from '@tanstack/react-query';
import { PhotoService } from '../service/photo.service';
import { usePhotoContainer } from '../di';


export const usePhoto = (id: string) => {
    const container = usePhotoContainer();
    const photoService = container.get(PhotoService);

  return useQuery({
    queryKey: ['photos', id],
    queryFn: () => photoService.findPhoto(id),
    enabled: !!id, 
  });
};