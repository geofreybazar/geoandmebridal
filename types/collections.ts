export interface ImageInfo {
  _id: string;
  imageInfo: {
    publicId: string;
    url: string;
  };
}

export interface CollectionType {
  _id: string;
  collectionName: string;
  description: string;
  status: "hidden" | "active";
  coverImage: {
    publicId: string;
    url: string;
  };
  photos: ImageInfo[];
  createdAt: string;
}
