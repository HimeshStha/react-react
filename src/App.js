import React from 'react'
import { Route, Routes } from 'react-router';
import RootLayout from './pages/RootLayout';
import Homepage from './pages/Homepage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ContactPage from './pages/ContactPage';
import AboutDetail from './pages/AboutDetail';
import ContactDetail from './pages/ContactDetail';

const App = () => {




  return (
    <div>



      <Routes>
        <Route path='/' element={<RootLayout />}>


          <Route index element={<Homepage />} />

          <Route path='about' element={<About />} >
            <Route path='aboutDetail' element={<AboutDetail />} />
          </Route>

          <Route path='contact' element={<ContactPage />} >
            <Route path='contactDetail' element={<ContactDetail />} />
          </Route>

          <Route path='*' element={<NotFound />} />


        </Route>


      </Routes>

    </div>
  )
}

export default App
