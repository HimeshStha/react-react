import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div>

      <NavLink to='contactDetail'>Got Nest About Contact Detail</NavLink>

      <h1>Contact Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minima provident? Provident eligendi deleniti, earum vero modi inventore alias quod, explicabo ducimus quibusdam unde? Odio provident, officia ea cumque saepe velit labore magnam consequatur dolores ipsam unde aperiam eius incidunt! Cupiditate suscipit libero velit eligendi earum praesentium laborum porro neque!</p>

      <Outlet />

    </div>
  )
}

export default ContactPage
