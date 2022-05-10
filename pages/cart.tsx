import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'
import ListCart from '../components/organisms/ListCart/ListCart'

const Home: NextPage = () => {
  return (
    <Container maxW='container.lg' size="lg">
      <ListCart/>
    </Container >
  )
}

export default Home
