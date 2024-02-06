import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Counter from './pages/Counter';
import Home from './pages/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch(
      'https://function-demoapp.azurewebsites.net/api/HttpTrigger1?name=Kelvin&code=_2DRQtmHN6bINEvAMt3a2dwP59qXQyhIXZEierbhC-S6AzFu6L4RiA=='
    ).then(async (response) => {
      const res = await response.json();
      console.log(res);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
