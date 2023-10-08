import type { Product } from '$lib/model/product';
import { writable } from 'svelte/store';

export const cartStore = writable<Product[]>([]);
