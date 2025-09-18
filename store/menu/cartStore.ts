import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ProductType } from "../../types/ProductType";

type State = {
  cart: {
    product: ProductType;
    quantity: number;
  }[];
  addProduct: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
  inputQuantity: (product: ProductType, quantity: number) => void;
};

export const useCartStore = create<State>()(
  immer((set) => ({
    cart: [],
    addProduct: (product: ProductType) => {
      set((state: State) => {
        if (state.cart.find((item) => item.product.id === product.id)) {
          state.cart.find((item) => item.product.id === product.id)!.quantity++;
          return;
        }
        state.cart.push({ product, quantity: 1 });
      });
    },
    removeProduct: (product: ProductType) => {
      set((state: State) => {
        const item = state.cart.find((item) => item.product.id === product.id);
        if (!item) return;
        if (item?.quantity === null) return;
        if (item?.quantity === undefined) return;
        if (item?.quantity > 1) {
          state.cart.find((item) => item.product.id === product.id)!.quantity--;
          return;
        }
        if (item?.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.product.id !== product.id
          );
          return;
        }
      });
    },
    inputQuantity: (product: ProductType, quantity: number) => {
      set((state: State) => {
        const item = state.cart.find((item) => item.product.id === product.id);
        if (!item) return;
        if (item?.quantity === null) return;
        if (item?.quantity === undefined) return;
        state.cart.find((item) => item.product.id === product.id)!.quantity =
          quantity;
      });
    },
  }))
);
