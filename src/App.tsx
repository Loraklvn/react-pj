import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Counter from './pages/Counter';
import Home from './pages/Home';

function App() {
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
