"use client";

import { useInject } from "@hooks/useInject.hook";
import { PhotoService } from "../service/photo.service";
import { useEffect, useState } from "react";




export const usePhoto = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const photoService = useInject(PhotoService); 

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        setLoading(true);
        const photos = await photoService.findAllPhoto();
        setPhotos(photos);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    loadPhotos();
  }, [photoService]);

  return {
    data: photos,
    loading: loading,
    error: error, 
  };
};