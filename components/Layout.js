import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div
        className='main-wrapper'
        style={
          router.pathname == '/work/[slug]' ||
          router.pathname == '/services/[slug]'
            ? { marginTop: 0 }
            : {}
        }
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
