import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  increateItemQuantity,
  decreaseItemQuantity,
  getCurrentQuantityById,
} from '../cart/cartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increateItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
