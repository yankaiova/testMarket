import { ICartItem } from "../../model/types";
//Калькулятор итоговой суммы
export const totalPrice = (cart: ICartItem[]) => {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
};
