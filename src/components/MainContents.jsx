import  { Bingo } from './Bingo.jsx';
import { Footer } from './Footer.jsx';
import  { Header } from './Header.jsx';

export const MainContents = () => {
  return (
    <main>
      <Header />
      <Bingo size={7} />
      <Footer />
    </main>
  )
}
