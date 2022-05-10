import Product from '../interfaces/product';
import { createContext, useContext, ReactNode, useState } from "react";
import { IField } from '../interfaces/geral';

type CartListItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
    cart: CartListItem[];
    addProductToCart: (item: CartListItem) => void;
    removeProductFromCart: (item: Product) => void;
};
  
const defaultContext: CartContextType = {
    cart: [],
    addProductToCart: () => {},
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
        }
        setCart([...cart, item]);
    };

    const removeProductFromCart = (item: Product) => {
        const newProducts = cart.filter((p) => p.product.id !== item.id);

          setCart(newProducts);
    };

    const value = {
        cart,
        addProductToCart,
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