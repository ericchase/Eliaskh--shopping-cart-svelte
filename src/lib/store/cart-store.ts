import { browser } from '$app/environment';
import type { Product } from '$lib/model/product';
import { get, writable } from 'svelte/store';

/** The list of products the user has placed in the cart, along with a count of
 * how many of each product the user wishes to purchase. */
export const cartProductStore = writable(new Map<string, number>(), (set) => {
  if (browser) {
    const saved = window.localStorage.getItem('CartProductStore');
    if (saved != null) {
      const products = JSON.parse(saved);
      if (Array.isArray(products)) {
        set(new Map<string, number>(products));
      }
    }
  }
});
cartProductStore.subscribe((products) => {
  if (browser) {
    window.localStorage.setItem('CartProductStore', JSON.stringify([...products]));
  }
});

export function addToCart(product: Product) {
  cartProductStore.update((map) => {
    map.set(product.id, 1);
    return map;
  });
}
export function removeFromCart(product: Product) {
  cartProductStore.update((map) => {
    map.delete(product.id);
    return map;
  });
}

export function incrementProductCount(product: Product) {
  cartProductStore.update((map) => {
    map.set(product.id, (map.get(product.id) ?? 0) + 1);
    return map;
  });
}
export function decrementProductCount(product: Product) {
  cartProductStore.update((map) => {
    const oldCount = map.get(product.id) ?? 1;
    map.set(product.id, Math.max(1, oldCount - 1));
    return map;
  });
}
export function getProductCount(product: Product) {
  return get(cartProductStore).get(product.id) ?? 0;
}

export function calculateProductTotalCost(product: Product) {
  return product.price * getProductCount(product);
}
export function getTotalCostOfAllProducts(products: Product[]) {
  return products.reduce((sum, product) => sum + calculateProductTotalCost(product), 0);
}
