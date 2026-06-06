import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ProductType } from "../../types/ProductType";
import { products } from "@/@temp/products";

type State = {
  products: ProductType[];
  getProducts: () => void;

  editProduct: (productId: string, updatedProduct: ProductType) => void;
};

export const useProductStore = create<State>()(
  immer((set) => ({
    products: [],
    getProducts: () => {
      set((state: State) => {
        state.products = products;
      });
    },
    editProduct: (productId: string, updatedProduct: ProductType) => {
      set((state: State) => {
        const productIndex = state.products.findIndex(
          (p) => p.id === productId,
        );
        if (productIndex !== -1) {
          state.products[productIndex] = updatedProduct;
        }
      });
    },
  })),
);
