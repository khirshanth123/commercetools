export interface GalleryProps {
  images: GalleryItemsProps[];
  thumbnails: GalleryItemsProps[];
}

export interface GalleryItemsProps {
  url: string;
  altText?: string;
  imageType?: string;
  format?: string;
  galleryIndex?: number;
}
