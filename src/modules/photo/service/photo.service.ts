import { inject, injectable } from 'inversify';
import { PhotoRepository, IPhotoRepository } from '../repository/photo.repo';

export interface IPhotoService {
  findAllPhoto(): Promise<string[]>;
}

@injectable()
export class PhotoService implements IPhotoService {
  public constructor(
    @inject(PhotoRepository) 
    private repo: IPhotoRepository,
  ) {}

  public async findAllPhoto(): Promise<string[]> {
    return this.repo.findAll();
  }
}