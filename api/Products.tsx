import Product from '../interfaces/product';
import api from './config/api';


export const fetchProducts = () =>
  api.get<Product[]>(
    `/products`,
  );

