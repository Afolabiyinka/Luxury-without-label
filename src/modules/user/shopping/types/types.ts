export type ApiProduct = {
  webID: string;
  productTitle: string;
  image?: {
    url: string;
  };
  prices?: {
    salePrice?: {
      minPrice: number;
    };
    regularPrice?: {
      minPrice: number;
    };
  }[];
  availableColor?: string[];
  rating?: {
    avgRating: number;
    count?: number;
  };
  swatchImages?: { URL: string }[];
};
