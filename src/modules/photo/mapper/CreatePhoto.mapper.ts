import { MapperInterface } from "@core/interfaces/Mapper.interface";
import { CreatePhotoDto } from "../dto/createPhoto.dto";
import { Photo } from "../entity/photo.entity";



export class CreatePhotoMapper implements MapperInterface<CreatePhotoDto, Photo> {
    public toDto(entity: Photo): CreatePhotoDto {
        const dto = new CreatePhotoDto(
            entity.id,
            entity.albumId,
            entity.title,
            entity.url,
            entity.thumbnailUrl
        );
        return dto;
    }


    public toEntity(dto: CreatePhotoDto): Photo {
        const entity = new Photo(
            dto.id,
            dto.albumId,
            dto.title,
            dto.url,
            dto.thumbnailUrl
        );
        return entity;
    }
}