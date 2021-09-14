import React, { useContext } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Routers from './pages/Routers';

import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className='App'>
      <Routers />
      <main>
        {/* {!ctx.isLoggedIn && <Login />} */}
        {ctx.isLoggedIn && <Home />}
      </main>
    </div>
  );
}

export default App;
