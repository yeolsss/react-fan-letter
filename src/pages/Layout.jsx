import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
