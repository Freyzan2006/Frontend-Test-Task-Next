


export class CreatePhotoDto {
    constructor(
        public readonly id: number,
        public readonly pageURL: string,
        public readonly type: string,
        public readonly tags: string,
        public readonly previewURL: string,
        public readonly previewWidth: number,
        public readonly previewHeight: number,
        public readonly webformatURL: string,
        public readonly webformatWidth: number,
        public readonly webformatHeight: number,
        public readonly largeImageURL: string,
        public readonly fullHDURL: string,
        public readonly imageURL: string,
        public readonly imageWidth: number,
        public readonly imageHeight: number,
        public readonly imageSize: number,
        public readonly views: number,
        public readonly downloads: number,
        public readonly likes: number,
        public readonly comments: number,
        public readonly userId: number,
        public readonly user: string,
        public readonly userImageURL: string
    ) {}
}