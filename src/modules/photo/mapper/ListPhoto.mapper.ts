import { MapperInterface } from "@core/interfaces/Mapper.interface";
import { Photo } from "../entity/photo.entity";
import { ListPhotoDto } from "../dto/listPhoto.dto";
import { injectable } from "inversify";



@injectable()
export class ListPhotoMapper implements MapperInterface<Photo[], ListPhotoDto> {
    public toDto(entity: Photo[]): ListPhotoDto {
        return new ListPhotoDto(0, 0, entity);
    }

    public toEntity(dto: ListPhotoDto): Photo[] {
        return dto.hits;
    }
}