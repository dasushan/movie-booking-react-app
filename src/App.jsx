import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Admin/Dashboard';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/admin" element={<Dashboard />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
