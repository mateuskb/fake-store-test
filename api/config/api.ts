import axios from 'axios';
// import { useToast } from '@chakra-ui/react'

export const baseURL = 'https://fakestoreapi.com/';
// const toast = useToast();

const api = axios.create({
  baseURL: baseURL,
});


api.interceptors.response.use(undefined, (error:any) => {
  // if (error?.response?.status === 400 || error?.response?.status === 500) {
  //   toast({
  //     title: 'Ops.',
  //     description: "Ocorreu algum erro ao efetuar a operação.",
  //     status: 'error',
  //     duration: 9000,
  //     isClosable: true,
  //   })
  // }
  return Promise.reject(error);
});

export const authApi = axios.create({ baseURL });
export default api;
