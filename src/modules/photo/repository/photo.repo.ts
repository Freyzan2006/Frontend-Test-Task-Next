import { inject, injectable } from 'inversify';
import { IPhotoApi, PhotoApi } from '../api/photo.api';
import { Photo } from '../entity/photo.entity';

import { ListPhotoMapper } from '../mapper/ListPhoto.mapper';

export interface IPhotoRepository {
  findAll(): Promise<Photo[]>;
  findById(id: string): Promise<Photo>;
  create(file: File): Promise<Photo>;
  deleteById(id: number): Promise<void>;
}

@injectable()
export class PhotoRepository implements IPhotoRepository {
    constructor(
      @inject(PhotoApi) 
      private api: IPhotoApi,
      @inject(ListPhotoMapper)
      private listMapper: ListPhotoMapper
    ) {}


    public async findAll(): Promise<Photo[]> {
      const photos = await this.api.findAllPhoto();

      const dtoToEntities = this.listMapper.toEntity(photos);

      return dtoToEntities;
    }

    public async findById(id: string): Promise<Photo> {
      return this.api.findPhotoById(id);
    }

    public async create(file: File): Promise<Photo> {
      return this.api.uploadPhoto(file);
    }


    public async deleteById(id: number): Promise<void> {
      return this.api.deletePhoto(id);
    }
}