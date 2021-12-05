import MainLayoutWrapper from '../layouts/MainLayoutWrapper'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }) {
  return (
    <MainLayoutWrapper>
    <Component {...pageProps} />
    </MainLayoutWrapper>
  )
}

export default MyApp
