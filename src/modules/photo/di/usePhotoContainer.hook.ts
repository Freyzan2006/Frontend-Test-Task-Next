"use client";

import { useContext } from "react";
import { PhotoContainerContext } from "./provider";

export const usePhotoContainer = () => {
    const container = useContext(PhotoContainerContext);
    if (!container) throw new Error('PhotoContainer not found');
    return container;
};