import { MapperInterface } from "@core/interfaces/Mapper.interface";
import { CreatePhotoDto } from "../dto/createPhoto.dto";
import { Photo } from "../entity/photo.entity";



export class CreatePhotoMapper implements MapperInterface<CreatePhotoDto, Photo> {
    public toDto(entity: Photo): CreatePhotoDto {
        const dto = new CreatePhotoDto(
            entity.id,
            entity.pageURL,
            entity.type,
            entity.tags,
            entity.previewURL,
            entity.previewWidth,
            entity.previewHeight,
            entity.webformatURL,
            entity.webformatWidth,
            entity.webformatHeight,
            entity.largeImageURL,
            entity.fullHDURL,
            entity.imageURL,
            entity.imageWidth,
            entity.imageHeight,
            entity.imageSize,
            entity.views,
            entity.downloads,
            entity.likes,
            entity.comments,
            entity.userId,
            entity.user,
            entity.userImageURL
        );
        return dto;
    }


    public toEntity(dto: CreatePhotoDto): Photo {
        const entity = new Photo(
            dto.id,
            dto.pageURL,
            dto.type,
            dto.tags,
            dto.previewURL,
            dto.previewWidth,
            dto.previewHeight,
            dto.webformatURL,
            dto.webformatWidth,
            dto.webformatHeight,
            dto.largeImageURL,
            dto.fullHDURL,
            dto.imageURL,
            dto.imageWidth,
            dto.imageHeight,
            dto.imageSize,
            dto.views,
            dto.downloads,
            dto.likes,
            dto.comments,
            dto.userId,
            dto.user,
            dto.userImageURL
        );
        return entity;
    }
}