import Header from './Header';
import Home from './Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Repairstatus from './Repairstatus';

function App() {
  const [carid, setcarid] = useState('');
  const [driver, setdriver] = useState('');



  return (<BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<div><Header /><Home numberplate={carid} drivername={driver} setdrivername={setdriver} setnumberplate={setcarid} /></div>} />
        <Route path='/Repairstatus' element={<div><Header /><Repairstatus numberplate={carid} drivername={driver} /></div>} />
      </Routes>

    </div></BrowserRouter>
  );
}

export default App;
