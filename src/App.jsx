import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import NewMovie from './Admin/NewMovie';
import './App.css';
import Category from './Admin/Category';
import Timing from './Admin/Timing';
import LandingPage from './User/pages/LandingPage';
import UserDeck from './User/UserDeck';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Dashboard />}>
            
            <Route path="newmovie" element={<NewMovie />}/>
            <Route path="addcategory" element={<Category />}/>
            <Route path="timing" element={<Timing />}/>
          </Route>

          <Route path="/" element={<LandingPage />}>
          <Route path="/" element={<UserDeck />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
