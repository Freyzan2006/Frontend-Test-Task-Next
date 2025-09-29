'use client';

import React, { createContext, useContext, useRef } from 'react';
import { Container } from 'inversify';
import "reflect-metadata";
import { PhotoRepository, PhotoService } from '@modules/photo';


const ContainerContext = createContext<Container | null>(null);

interface ContainerProviderProps {
  children: React.ReactNode;
}

export const ContainerProvider: React.FC<ContainerProviderProps> = ({ 
  children 
}) => {
  const containerRef = useRef<Container | null>(null);

 
  if (!containerRef.current) {
    containerRef.current = new Container();
    containerRef.current.bind<PhotoRepository>(PhotoRepository).toSelf();
    containerRef.current.bind<PhotoService>(PhotoService).toSelf();
  }

  return (
    <ContainerContext.Provider value={containerRef.current}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainer = (): Container => {
  const container = useContext(ContainerContext);
  if (!container) {
    throw new Error('useContainer must be used within ContainerProvider');
  }
  return container;
};



