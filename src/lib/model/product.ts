export interface ProductGroup {
  type: string;
  list: Product[];
}

export interface Product {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  description: string;
}
