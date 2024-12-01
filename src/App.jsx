import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import NewMovie from './Admin/NewMovie';
import './App.css';
import Category from './Admin/Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Dashboard />}>
            
            <Route path="newmovie" element={<NewMovie />}/>
            <Route path="addcategory" element={<Category />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
