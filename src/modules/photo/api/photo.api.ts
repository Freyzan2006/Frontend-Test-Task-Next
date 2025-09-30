

import { injectable } from "inversify";
import { Photo } from "../entity/photo.entity";
import { ListPhotoDto } from "../dto/listPhoto.dto";
import { Axios } from "axios";
import { newPhotoClient } from "../client/photo.client";




export interface IPhotoApi {
    findAllPhoto(): Promise<ListPhotoDto>;
    findPhotoById(id: string): Promise<Photo>;
    uploadPhoto(file: File): Promise<Photo>;
    deletePhoto(id: number): Promise<void>;
}

@injectable()
export class PhotoApi implements IPhotoApi {
    private readonly baseUrl: string;
    private readonly client: Axios;

    constructor() {
        this.baseUrl = "/api/photos";
        this.client = newPhotoClient(this.baseUrl);
    }

    async findAllPhoto(): Promise<ListPhotoDto> {
        const response = await this.client.get<ListPhotoDto>('');
        return response.data;
    }

    async findPhotoById(id: string): Promise<Photo> {
        const response = await this.client.get<Photo>(`/${id}`);
        return response.data;
    }

    async uploadPhoto(file: File): Promise<Photo> {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await this.client.post<Photo>('/upload', formData);
        return response.data;
    }

    async deletePhoto(id: number): Promise<void> {
        await this.client.delete<void>(`/${id}`);
    }
}