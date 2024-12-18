import styled from 'styled-components';

import { OrderSummary } from '../../types';
import numberFormat from '../../utils/numberFormat';

const Container = styled.div`
  dl {
    display: flex;
    flex-wrap: wrap;
    line-height: 1.7;
  }

  dt {
    width: 8rem;
  }

  dd {
    width: calc(100% - 8rem);
  }
`;

type OrderProps = {
  order: OrderSummary;
}

export default function Order({ order }: OrderProps) {
  return (
    <Container>
      <div>
        주문 일시:
        {' '}
        {order.orderedAt}
      </div>
      <div>
        주문 코드:
        {' '}
        {order.id}
      </div>
      <div>
        상품:
        {' '}
        {order.title}
      </div>
      <div>
        결제 금액:
        {' '}
        {numberFormat(order.totalPrice)}
        원
      </div>
    </Container>
  );
}
