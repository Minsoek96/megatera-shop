import useProductFormStore from '../../../hooks/useProductFormstore';

import Button from '../../ui/Buttton';

export default function SubmitButton() {
  const [{ done }, store] = useProductFormStore();

  const handleClick = () => {
    store.addToCart();
  };

  if (done) {
    return (
      <p>장바구니에 담았습니다</p>
    );
  }

  return (
    <Button onClick={handleClick}>
      장바구니에 담기
    </Button>
  );
}
