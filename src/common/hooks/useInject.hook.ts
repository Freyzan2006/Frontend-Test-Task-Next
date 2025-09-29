"use client";

import { ServiceIdentifier } from "inversify";
import { useContainer } from "../contexts/ContainerContext";
import { useRef } from "react";


export const useInject = <T> (identifier: ServiceIdentifier<T>): T => {
    const container = useContainer();
    const serviceRef = useRef<T | null>(null);
    
    if (!serviceRef.current) {
      serviceRef.current = container.get<T>(identifier);
    }
    
    return serviceRef.current;
};