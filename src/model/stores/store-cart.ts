import { makeAutoObservable } from "mobx";
import { ICartItem, IProduct } from "../types";
import { totalPrice } from "../../lib/utils/calcTotalPrice";
export class CartStore {
  products: ICartItem[] = [];
  total = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setProduct(data: Array<IProduct>) {
    //фейковое наполнение корзины из полученных данных
    this.products.length = 0;
    data.map((item: IProduct) => {
      this.products?.push({
        id: item.id,
        title: item.title,
        description: item.description,
        thumbnail: item.thumbnail,
        price: item.price,
        quantity: 1,
      });
    });
    this.total = totalPrice(this.products);
  }

  get totalResult() {
    return this.total;
  }
  incrementQuantity(index: number) {
    //Увеличение количества товара с пересчетом суммы
    this.products[index].quantity++;
    const price = this.products[index].price;
    this.total += price;
  }
  decrementQuantity(index: number) {
    //Уменьшение количества товара с пересчетом суммы
    this.products[index].quantity--;
    const price = this.products[index].price;
    this.total -= price;
  }
  removeProduct(id: number, index: number) {
    //Удаление продукта из корзины
    this.total -= this.products[index].price * this.products[index].quantity;
    this.products = this.products.filter((product) => product.id !== id);
  }
}
