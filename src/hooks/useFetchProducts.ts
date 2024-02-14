import { useEffect } from 'react';

import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import ProductsStore from '../stores/ProductsStore';

export default function useFetchProducts() {
  const store = container.resolve(ProductsStore);
  const [{ products }] = useStore(store);

  useEffect(() => {
    store.fetchProducts();
  }, []);

  return {
    products,
  };
}
