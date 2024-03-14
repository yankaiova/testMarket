export interface IProduct {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}
export interface ICartItem extends IProduct {
  quantity: number;
}
