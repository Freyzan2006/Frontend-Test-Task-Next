import { inject, injectable } from 'inversify';
import { PhotoRepository, IPhotoRepository } from '../repository/photo.repo';
import { Photo } from '../entity/photo.entity';

export interface IPhotoService {
  findAllPhoto(): Promise<Photo[]>;
  findPhoto(id: string): Promise<Photo>;
  uploadPhoto(file: File): Promise<Photo>;
  deletePhoto(id: number): Promise<void>;
}

@injectable()
export class PhotoService implements IPhotoService {
  public constructor(
    @inject(PhotoRepository) 
    private repo: IPhotoRepository,
  ) {}

  public async findAllPhoto(): Promise<Photo[]> {
    return this.repo.findAll();
  }

  public async findPhoto(id: string): Promise<Photo> {
    return this.repo.findById(id);
  }

  public async uploadPhoto(file: File): Promise<Photo> {
    return this.repo.create(file);
  }

  public async deletePhoto(id: number): Promise<void> {
    return this.repo.deleteById(id);
  }
}