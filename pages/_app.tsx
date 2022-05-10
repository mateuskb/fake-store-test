import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from '../components/molecules/NavBar';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={theme}>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
