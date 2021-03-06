import type { NextPage } from 'next'
import ListProducts from '../components/organisms/ListProducts/ListProducts'
import { Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container maxW='container.lg' size="lg">
      <ListProducts/>
    </Container >
  )
}

export default Home
