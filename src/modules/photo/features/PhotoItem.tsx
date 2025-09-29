"use client";

import { Card } from "@ui-kit/ui/Card"
import { Photo } from "../entity/photo.entity"
import { useDeletePhoto } from "../hooks/useDeletePhoto.hook";
import { Button } from "@ui-kit/ui/Button";
import { Loading } from "@ui-kit/ui/Loading";
import { Title } from "@ui-kit/ui/Font";
import Image from "next/image";
import { AlertGroup } from "@ui-kit/ui/Alert";
import { Notice } from "@ui-kit/ui/Notice";

interface IPhotoItemProps {
    photo: Photo
}

export const PhotoItem: React.FC<IPhotoItemProps> = ({ photo }) => {
    const deletePhotoMutation = useDeletePhoto();

    return (
        <Card variant={"outline"}>
            <AlertGroup>
                { deletePhotoMutation.isError && <Notice message="Ошибка удаления фотографии" variant={"error"} /> }
                { deletePhotoMutation.isSuccess && <Notice message="Фотография удалена" variant={"success"} /> }
            </AlertGroup>
            
            <Image 
                src={photo.previewURL} 
                alt={photo.previewURL} 
                className="w-full h-48 object-cover" 
                width={photo.previewWidth}
                height={photo.previewHeight}
            />
            <Title level="h3">{photo.user}</Title>
            <Button
            onClick={() => deletePhotoMutation.mutate(photo.id)}
            disabled={deletePhotoMutation.isPending}
            variant={"danger"}
            >
            {deletePhotoMutation.isPending ? <Loading variant={"danger"} /> : 'Удалить'}
            </Button>
        </Card>
    )
}