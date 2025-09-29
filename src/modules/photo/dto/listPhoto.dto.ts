import { Photo } from "../entity/photo.entity";


export class ListPhotoDto {
    constructor(
        public readonly total: number,
        public readonly totalHits: number,
        public readonly hits: Photo[]
    ) {}
}