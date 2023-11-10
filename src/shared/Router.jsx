import Home from '../components/Home';
import Detail from '../components/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import { useState } from 'react';
export const Router = ({ members, membersBtnSelector }) => {
  const [letter, setLetter] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout members={members} membersBtnSelector={membersBtnSelector} />
          }
        >
          <Route exact path="/" element={<Home members={members} />} />
          <Route exact path=":id" element={<Detail members={members} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
