import Footer from '../Footer';
import Headband from '../Headband';
import { Outlet } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <Headband />
      <Outlet />
      <Footer />
    </>
  );
};

export default LandingPage;
