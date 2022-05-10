import { createContext } from 'react';
import Product from '../interfaces/product';


export type CartListItem<TItemType extends Product> = {
  product: TItemType;
  quantity: number;
};

export type CartContextType<TItemType extends Product> = {
  cart: CartListItem<TItemType>[];
  addProductToCart: (item: CartListItem<TItemType>) => void;
  removeProductFromCart: (item: TItemType) => void;
};

const defaultContext: CartContextType<any> = {
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {}
};

export function CreateCartContext<TItemType extends Product>() {
  return createContext<CartContextType<TItemType>>(defaultContext);
}