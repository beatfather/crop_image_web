import './App.css';
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter, Route, Routes } from 'react-router-dom';


import { Button, Checkbox, Form, Input } from 'antd';
import { history } from '@/utils';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function App() {
  return (
    <HistoryRouter history={history}>

        <Routes>

          <Route index element={<Home />} />



          <Route path="*" element={<NotFound />} /> //--- 将这一行移到这里
        </Routes>

    </HistoryRouter>
  );
}

export default App;
