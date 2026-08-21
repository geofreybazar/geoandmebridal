export interface Testimonials {
  _id: string;
  isFeatured: boolean;
  rating: number;
  review: string;
  brideId: {
    bridesName: string;
    photo: string;
  };
}
