import React from 'react';
import { Gallery, type GalleryItemsProps } from '@repo/ui';
export interface ProductImagesProps {
    images: [];
    className?: string;
}

export const ProductGallery = ({ images, className }: ProductImagesProps) => {
   
    return (
        <>
          {images.length && (
            <div className={className}>
              <Gallery images={images} thumbnails={images} />
            </div>
          )}
        </>
      );
}