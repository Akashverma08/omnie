import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartState {
  items: Product[];
  count:number;
}

const initialState: CartState = {
  items: [],
  count:0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      state.count+=1;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;