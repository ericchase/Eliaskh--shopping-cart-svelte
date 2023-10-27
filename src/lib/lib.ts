import ProductGroups from '$lib/data/product.json';
import type { Product } from '$lib/model/product';

// helper functions for dealing with products

export const allProductsList = ProductGroups.flatMap((groups) => groups.list);
export const productTypes = ProductGroups.flatMap((groups) => groups.type);

export function getProduct(id: string) {
  return allProductsList.find((product) => product.id === id);
}
export function getProductsByIds(ids: string[]) {
  return allProductsList.filter((product) => ids.includes(product.id));
}
export function getProductsByType(type: string): Product[] {
  return ProductGroups.find((group) => group.type === type)?.list ?? [];
}
