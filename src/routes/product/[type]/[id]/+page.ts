import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const type = params.type;
  const id = params.id;

  return { type, id };
};
