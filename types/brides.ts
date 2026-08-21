type measurements = {
  shoulder?: string;
  bust?: string;
  bustPoint?: string;
  bustDistance?: string;
  figureFront?: string;
  figureBack?: string;
  spanFront?: string;
  spanBack?: string;
  armHole?: string;
  sleeveLength?: string;
  sleeveOpening?: string;
  neck?: string;
  gownLength?: string;
  waistline?: string;
  hips1?: string;
  hips2?: string;
};

type weddingDetails = {
  gownType?: string;
  weddingTheme?: string;
  venue?: string;
  remarks?: string;
};

export interface ImageInfo {
  _id: string;
  imageInfo: {
    publicId: string;
    url: string;
  };
}

export interface Bride {
  _id: string;
  bridesName: string;
  email: string;
  weddingDate: string;
  status: string;
  testimonial?: string;
  contactNumber?: number;
  address?: string;
  details: weddingDetails;
  measurements: measurements;
  weddingGownDesign: {
    _id: string;
    designNote: string;
    images: ImageInfo[];
  };
  photos: ImageInfo[];
}

export interface ReturnedBrides {
  data: Bride[];
  nextCursor: string | null;
}
