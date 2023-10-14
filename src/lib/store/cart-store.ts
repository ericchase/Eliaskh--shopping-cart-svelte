import type { Product } from '$lib/model/product';
import { writable } from 'svelte/store';

interface CartProductDetails {}

export const cartStore = writable<Map<Product, CartProductDetails>>(new Map());

const productCounts = [];

export function addToCart(product: Product) {
  cartStore.update((set) => set.add(product));
}

export function getTotalProductCost() {
  return 0;
}
