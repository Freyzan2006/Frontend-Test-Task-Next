import { injectable } from "inversify";
import { Photo } from "../entity/photo.entity";
import { ListPhotoDto } from "../dto/listPhoto.dto";

export interface IPhotoApi {
    findAllPhoto(): Promise<ListPhotoDto>;
    findPhotoById(id: string): Promise<Photo>;
    uploadPhoto(file: File): Promise<Photo>;
    deletePhoto(id: number): Promise<void>;
}

@injectable()
export class PhotoApi implements IPhotoApi {
    private readonly baseUrl = '/api/photos';


    async findAllPhoto(): Promise<ListPhotoDto> {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch photos');
        }
        return response.json();
    }

    async findPhotoById(id: string): Promise<Photo> {
        const response = await fetch(`${this.baseUrl}/${id}`);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to fetch photo');
        }
        return response.json();
    }

    async uploadPhoto(file: File): Promise<Photo> {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch(`${this.baseUrl}/upload`, {
            method: 'POST',
            body: formData,
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to upload photo');
        }
        return response.json();
    }

    async deletePhoto(id: number): Promise<void> {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to delete photo');
        }
    }
}