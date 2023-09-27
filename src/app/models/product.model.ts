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

export interface CreateProductDTO extends Omit<Product, 'id' | 'Category'> {
  categoryId: number;
}

export interface UpdateProductDTO extends Partial<CreateProductDTO>{  }
