import Product from "./product";

export type CartListItem = {
    product: Product;
    quantity: number;
  };
  
  export type CartContextType = {
      cart: CartListItem[];
      addProductToCart: (item: CartListItem) => void;
      subtractProductToCart: (item: CartListItem) => void;
      getQuantity: (id: string) => string;
      removeProductFromCart: (item: Product) => void;
  };