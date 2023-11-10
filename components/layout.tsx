import Footer from './Footer';
import NavBar from './navbar/NavBar';

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
