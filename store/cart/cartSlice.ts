import { PRODUCTS, PRODUCTTYPE } from "@/constants/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastAndroid } from "react-native";

export type CartItem = {
  count: number;
} & PRODUCTTYPE;

export interface CartState {
  cart: CartItem[];
}
const initialState: CartState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const product = PRODUCTS.find((p) => p.id === action.payload);
      if (!product) {
        ToastAndroid.showWithGravity(
          "Produit introuvable ! 😕",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        return;
      }
      const cartProduct = state.cart.find((p) => p.id === action.payload);
      if (cartProduct) {
        cartProduct.count += 1;
        ToastAndroid.showWithGravity(
          "Article ajouté à votre panier. 🛒",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      } else {
        state.cart.push({ ...product, count: 1 });
        ToastAndroid.showWithGravity(
          "Article ajouté à votre panier. 🛒",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productToRemove = state.cart.find((p) => p.id === action.payload);
      if (!productToRemove) {
        ToastAndroid.showWithGravity(
          "Cet article n'est pas dans le panier. 🛑",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        return;
      }
      state.cart = state.cart.filter((p) => p.id !== action.payload);
      ToastAndroid.showWithGravity(
        "Article retiré du panier. 🗑️",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    },
    wipeCart: (state) => {
      state.cart = [];
      ToastAndroid.showWithGravity(
        "Tous les articles ont été retirés 🗑️",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    },
    decrementItem: (state, action: PayloadAction<string>) => {
      const cartProduct = state.cart.find((p) => p.id === action.payload);
      if (!cartProduct) {
        ToastAndroid.showWithGravity(
          "Produit introuvable dans le panier. 😕",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        return;
      }
      if (cartProduct.count > 1) {
        cartProduct.count -= 1;
        ToastAndroid.showWithGravity(
          "Quantité réduite d'un article. ➖",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      } else {
        state.cart = state.cart.filter((p) => p.id !== action.payload);
        ToastAndroid.showWithGravity(
          "Article retiré du panier. 🗑️",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    },
  },
});
export const { addItem, removeItem, decrementItem, wipeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
