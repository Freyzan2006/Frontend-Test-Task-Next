'use client';

import "reflect-metadata";

import React, { createContext, useRef } from 'react';
import { Container } from 'inversify';
import { createPhotoContainer } from './container';



export const PhotoContainerContext = createContext<Container | null>(null);

export const PhotoContainerProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const containerRef = useRef<Container | null>(null);

  if (!containerRef.current) {
    containerRef.current = createPhotoContainer();
  }

  return (
    <PhotoContainerContext.Provider value={containerRef.current}>
      {children}
    </PhotoContainerContext.Provider>
  );
};

