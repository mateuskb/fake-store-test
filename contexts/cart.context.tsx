import Product from '../interfaces/product';
import { createContext, useContext, useState } from "react";
import { IField } from '../interfaces/geral';
import { CartContextType, CartListItem } from '../interfaces/cart';

  
const defaultContext: CartContextType = {
    cart: [],
    addProductToCart: () => {},
    subtractProductToCart: () => {},
    getQuantity: () => '',
    removeProductFromCart: () => {}
};

const CartContext = createContext<CartContextType>(defaultContext);



export function useCart() {
    return useContext(CartContext);
}


export function CartProvider({ children }: IField) {
    const [cart, setCart] = useState<CartListItem[]>([]);

    const getProductById = (id: string): CartListItem | undefined => {
        return cart.find((p) => p.product.id === id);
    };

      
    const addProductToCart = (item: CartListItem) => {
        const existingProduct = getProductById(item.product.id);
        let newState: CartListItem[] = [];
        if (existingProduct) {
          newState = cart.map((p) => {
            if (p.product.id === existingProduct.product.id) {
              return {
                product: p.product,
                quantity: p.quantity + item.quantity
              };
            }
            return p;
          });
          setCart(newState);
        } else {
          setCart([...cart, item]);
        }
    };

    const subtractProductToCart = (item: CartListItem) => {
        const existingProduct = getProductById(item.product.id);
        let newState: CartListItem[] = [];
        if (existingProduct) {
          newState = cart.map((p) => {
            if (p.product.id === existingProduct.product.id) {
              if(p.quantity > 1) {
                return {
                  product: p.product,
                  quantity: p.quantity - item.quantity
                };
              } else {
                removeProductFromCart(p.product);
              }
            }
            return p;
          });
          setCart(newState);
        } 
    };

    const removeProductFromCart = (item: Product) => {
        const newProducts = cart.filter((p) => p.product.id !== item.id);

          setCart(newProducts);
    };

    const getQuantity = (id: string): string => {
      const existingProduct = getProductById(id);
      if (existingProduct) {
        return existingProduct.quantity.toString();
      } else {
        return '0';
      }
       
  };
    

    const value = {
        cart,
        addProductToCart,
        getQuantity,
        subtractProductToCart,
        removeProductFromCart,
    };

    return (
        <>
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        </>
    );
}