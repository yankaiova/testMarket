import { makeAutoObservable } from "mobx";
import { CartStore } from "./store-cart";

class RootStore {
  cart = new CartStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export type { RootStore };
export const store = new RootStore();
