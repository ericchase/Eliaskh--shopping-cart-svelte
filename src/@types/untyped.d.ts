// this adds typing to the data file
declare module '$lib/data/product.json' {
  import { ProductGroup } from '$lib/model/product';
  const Products: ProductGroup[];
  export = Products;
}
