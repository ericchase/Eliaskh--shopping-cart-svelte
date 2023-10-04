import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  // async function getData(id: number) {
  //   const response = await fetch('/src/Data/product.json');
  //   const Data = await response.json();
  //   let type = '';
  //   // switch (id[1]) {
  //   //   case 'C':
  //   //     type = 'coffee';
  //   //     break;

  //   //   case 'M':
  //   //     type = 'machine';
  //   //     break;

  //   //   case 'A':
  //   //     type = 'accessory';
  //   //     break;
  //   // }
  //   return Data[type];
  // }

  // const products = await getData(Number.parseInt(params.productId));
  // const index = +params.productId[0];
  // const product = products[index - 1];
  return { productId: params.productId };
};
