"use client";

import { PhotoRepository, PhotoService } from '@modules/photo';
import { Container } from 'inversify';

import "reflect-metadata";

const container = new Container();

container.bind<PhotoRepository>(PhotoRepository).toSelf();
container.bind<PhotoService>(PhotoService).toSelf();

export { container };