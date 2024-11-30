import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import NewMovie from './Admin/NewMovie';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Dashboard />}>
            
            <Route path="newmovie" element={<NewMovie />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
