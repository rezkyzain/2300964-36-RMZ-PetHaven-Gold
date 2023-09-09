import './App.css';
import HomeScreen from './pages/Home';
import RegisterScreen from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
