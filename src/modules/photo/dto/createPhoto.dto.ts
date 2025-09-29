


export class CreatePhotoDto {
    constructor(
        public id: number,
        public albumId: number,
        public title: string,
        public url: string,
        public thumbnailUrl: string,
    ) {}
}