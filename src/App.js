import React from 'react'
import Header from './components/Header'
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router';
import About from './pages/About';

const App = () => {


  const mino = 'hello user';

  return (
    <div>

      <Header />

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='about' element={<About />} />



      </Routes>

    </div>
  )
}

export default App
