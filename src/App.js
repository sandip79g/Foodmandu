// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
