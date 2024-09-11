

import { HashRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Signin from './components/component-2/SignInPage/Signin';
import HomePage from './HomePage';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
