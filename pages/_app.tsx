import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/molecules/NavBar/NavBar';
import theme from '../styles/theme';
import { CartProvider } from '../contexts/cart.context';
import Footer from '../components/molecules/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <NavBar></NavBar>
        <Box marginBottom='100px'>
          <Component {...pageProps} />
        </Box>
        <Footer/>
      </CartProvider>
    </ChakraProvider>
  );
}

export default MyApp
