'use client';

import { Card } from "@ui-kit/ui/Card";

import { usePhotos } from "../hooks/usePhotos.hook";
import { TitleTextGroup } from "@ui-kit/ui/Font";
import { PhotoItem } from "../ui/PhotoItem";
import { Loading } from "@ui-kit/ui/Loading";
import { Alert } from "@ui-kit/ui/Alert";


export const PhotoList: React.FC = () => {
  const { data: photos, isLoading, error } = usePhotos();
  

  if (isLoading) return <Loading variant={"secondary"} />;
  if (error) return <Alert message="Ошибка загрузки фотографий" variant={"error"} />;

  const ListPhoto = () => photos?.map((photo) => <PhotoItem key={photo.id} photo={photo} />);

  return (
    <Card variant={"ghost"} className="grid grid-cols-3 gap-4">
      <TitleTextGroup title="Фотографии" text="Список фотографий" gap="sm" />
      { ListPhoto() }
    </Card>
  );
};