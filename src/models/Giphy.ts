export interface GiphyResponse {
  data: Giphy[];
}
export interface Giphy {
    id: number;
  type: string;
  title: string;
  url: string;
  images: Images;
}
export interface Images {
  original: OriginalImage;
}

export interface OriginalImage {
  url: string;
}
