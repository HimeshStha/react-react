import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>

      <NavLink to='aboutDetail'>Got Nest About Detail</NavLink>

      <h1>This is About Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque blanditiis, maiores cupiditate impedit quo ut. Dolorem quod, deserunt sequi, veritatis explicabo at et exercitationem non, quidem dignissimos ea? Vitae itaque perspiciatis deserunt, saepe explicabo maiores, accusamus ea ullam necessitatibus ex molestiae ratione repellat quas ipsum eos non expedita asperiores voluptatibus.</p>

      <Outlet />

    </div>


  )
}

export default About
