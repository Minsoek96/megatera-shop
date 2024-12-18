import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Order from './Order';

import { OrderDetail, OrderSummary } from '../../types';

const Container = styled.div`
  li {
    margin-block: 0.5rem;
    padding: 1rem;
    background: #eee;
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

type OrdersProps = {
  orders: OrderSummary[];
};

export default function Orders({ orders }: OrdersProps) {
  if (!orders.length) {
    return null;
  }

  return (
    <Container>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>
              <Order order={order} />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
