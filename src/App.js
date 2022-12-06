import { useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import Login from './components/login/index.js';
import Home from './components/home/index.js';
import { ProtectRoute } from './utils/ProtectRoute';
import { useEffect, useState, Fragment } from 'react';

function App() {

  // const [user, setUser] = useState(null);

  const { user } = useContext(AppContext);
  // console.log(user);

  return (
    <BrowserRouter basename='prueba-tita-media'>
      <Fragment>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectRoute user={user} />}>
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
