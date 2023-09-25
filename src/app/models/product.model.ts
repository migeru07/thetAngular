export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: Category;
  images: string[];
  rating?: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface Category {
  id: string;
  name: string;
}
