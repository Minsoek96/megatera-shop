import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Product from './Product';

import { ProductSummary } from '../../types';

const Container = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  li {
    padding: 1rem;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

type ProductsProps = {
  products: ProductSummary[];
}

export default function Products({ products }: ProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
