import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

function navBar() {
  return (
    <>
      <nav className='navbar'>

        <section>
          <ul className='navList navListLogo'>
            <li><Link to={'/'} className='navLink'> <img className='logo' src={logo} alt='logo' /> </Link></li>
          </ul>
          
        </section>

        <section className='navItems'>
          <article className='nav'>
            <ul className='navList'>
              <li><Link to={'electrico'} className='navLink'>Eléctrico</Link></li>
              <li><Link to={'maderas'} className='navLink'>Maderas</Link></li>
  {/*             <li><Link to={''} className='navLink'>Químicos</Link></li>
              <li><Link to={''} className='navLink'>Contacto</Link></li> */}
            </ul>
          </article>


          <CartWidget />
          

        </section>
      </nav>
      <Outlet/>
    </>
  )
}

export default navBar