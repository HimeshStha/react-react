import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayout from './pages/RootLayout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {




  return (
    <div>



      <Routes>
        <Route path='/' element={<RootLayout />}>

          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />

        </Route>


      </Routes>

    </div>
  )
}

export default App
