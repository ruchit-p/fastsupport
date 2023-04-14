import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import Footer from './components/footer';
import Navbar from './components/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>

  ) 
  
}

export default MyApp
