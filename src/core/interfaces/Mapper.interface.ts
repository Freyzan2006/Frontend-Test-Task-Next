


export interface MapperInterface<E, D> {
    toEntity(dto: D): E;
    toDto(entity: E): D;
}