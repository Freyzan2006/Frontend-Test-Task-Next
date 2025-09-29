"use client";

import { Container } from 'inversify';

import { PhotoApi } from '../api/photo.api';
import { PhotoService } from '../service/photo.service';
import { PhotoRepository } from '../repository/photo.repo';
import { MapperInterface } from '@core/interfaces/Mapper.interface';
import { ListPhotoMapper } from '../mapper/ListPhoto.mapper';


export const createPhotoContainer = () => {
  const container = new Container();
  container.bind<PhotoService>(PhotoService).toSelf();
  container.bind<PhotoRepository>(PhotoRepository).toSelf();
  container.bind<PhotoApi>(PhotoApi).toSelf();

  container.bind<ListPhotoMapper>(ListPhotoMapper).toSelf();
  
  return container;
};


