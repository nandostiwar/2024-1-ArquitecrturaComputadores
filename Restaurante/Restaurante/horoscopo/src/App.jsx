import './App.css';
import Form from './components/Form';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Form />} />
        <Route path='/userHome' element={<UserHome />} />
        <Route path='/adminHome' element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
