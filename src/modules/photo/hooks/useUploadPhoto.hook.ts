'use client';


import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PhotoService } from '../service/photo.service';
import { usePhotoContainer } from '../di';


export const useUploadPhoto = () => {
    const container = usePhotoContainer();
    const photoService = container.get(PhotoService);
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (file: File) => photoService.uploadPhoto(file),
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['photos'] });
        },
    });
};