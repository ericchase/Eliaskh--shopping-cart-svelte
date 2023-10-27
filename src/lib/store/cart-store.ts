import type { Product } from '$lib/model/product';
import { get, writable } from 'svelte/store';

export const cartProductStore = writable(new Set<Product>());
export const cartProductCountStore = writable(new Map<Product, number>());

export function addToCart(product: Product) {
  cartProductStore.update((set) => {
    set.add(product);
    return set;
  });
  cartProductCountStore.update((map) => {
    map.set(product, 1);
    return map;
  });
}
export function removeFromCart(product: Product) {
  cartProductStore.update((set) => {
    set.delete(product);
    return set;
  });
  cartProductCountStore.update((map) => {
    map.delete(product);
    return map;
  });
}

export function incrementProductCount(product: Product) {
  cartProductCountStore.update((map) => {
    map.set(product, (map.get(product) ?? 0) + 1);
    return map;
  });
}
export function decrementProductCount(product: Product) {
  cartProductCountStore.update((map) => {
    let newCount = (map.get(product) ?? 1) - 1;
    map.set(product, newCount < 1 ? 1 : newCount);
    return map;
  });
}
export function getProductCount(product: Product) {
  return get(cartProductCountStore).get(product) ?? 0;
}

export function calculateProductTotalCost(product: Product) {
  return product.price * (get(cartProductCountStore).get(product) ?? 0);
}

export function getTotalCostOfAllProducts() {
  return [...get(cartProductCountStore)].reduce((sum, [product, count]) => sum + product.price * count, 0);
}
