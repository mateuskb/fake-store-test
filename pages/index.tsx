import type { NextPage } from 'next'
import FooterLink from '../components/atoms/FooterLink'

const Home: NextPage = () => {
  return (
    <div>
      <footer >
        <FooterLink name={'Mateus Ribeiro'} />
      </footer>
    </div>
  )
}

export default Home
