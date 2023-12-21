import Header from '@/Components/Header';
import '@/styles/style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return <>
        <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        theme="colored"
      />
  </>
}
