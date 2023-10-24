declare module 'svelte-icons-pack/Icon.svelte' {
  const Icon: SvelteComponent;
  export = Icon;
}

// this adds typing to the data file
declare module '$lib/data/product.json' {
  const Products: ProductGroup[];
  export = Products;
}
