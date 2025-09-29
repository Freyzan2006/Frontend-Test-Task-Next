'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PhotoService } from '../service/photo.service';
import { usePhotoContainer } from '../di';

export const useDeletePhoto = () => {
  const container = usePhotoContainer();
  const photoService = container.get(PhotoService);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => photoService.deletePhoto(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['photos'] });
    },
  });
};