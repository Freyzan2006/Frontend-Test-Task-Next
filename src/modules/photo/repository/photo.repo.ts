import { injectable } from 'inversify';

export interface IPhotoRepository {
  findAll(): Promise<string[]>;
}

@injectable()
export class PhotoRepository implements IPhotoRepository {
  private photos: string[] = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg'
  ];

  public async findAll(): Promise<string[]> {
    // Имитация асинхронной операции
    return new Promise(resolve => {
      setTimeout(() => resolve(this.photos), 100);
    });
  }
}