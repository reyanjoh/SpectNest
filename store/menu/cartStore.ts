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
  receipt: {
    subtotal: number;
    discount: number;
    total: number;
  };
  updateReceipt: () => void;
  change: number;
  updateChange: (amountTendered: number) => void;
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
            (item) => item.product.id !== product.id,
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
    receipt: {
      subtotal: 0.0,
      discount: 0.0,
      total: 0.0,
    },
    updateReceipt: () => {
      set((state: State) => {
        state.receipt.subtotal = state.cart.reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0,
        );
        state.receipt.discount = 0.0;
        state.receipt.total = state.receipt.subtotal - state.receipt.discount;
      });
    },
    change: 0.0,
    updateChange: (amountTendered: number) => {
      set((state: State) => {
        state.change = amountTendered - state.receipt.total;
      });
    },
  })),
);
