import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';

function Layout({ members, membersBtnSelector }) {
  return (
    <>
      <Header members={members} membersBtnSelector={membersBtnSelector} />
      <Outlet />
    </>
  );
}

export default Layout;
