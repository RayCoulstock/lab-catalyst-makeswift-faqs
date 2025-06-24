'use server';

import { getProductFaqMetafields, Variables as ProductFaqVariables } from '../_data/component-data';

export const getNextProductFaqs = async(variables: ProductFaqVariables) => {
  return Promise.resolve({
    productName: null,
    endCursor: null,
    faqs: [],
  });
}
