import Home from '../components/Home';
import Detail from '../components/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
