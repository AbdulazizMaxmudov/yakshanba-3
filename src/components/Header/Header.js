import {  NavLink } from 'react-router-dom';
import './header.css'
export const Header = ()=>{
  return (
    <div className='header'>
    <ul className='header-list' >
      <li className='header-list-tem'>
        <NavLink to='/'> Home</NavLink>
      </li>
      <li className='header-list-tem'>
        <NavLink to='/products'> Products</NavLink>
      </li>
      <li className='header-list-tem'>
        <NavLink to='/cart'> Cart</NavLink>
      </li>
    </ul>
    
    <button className='btn btn-danger'> LogOut</button>
    </div>
  )
}