import logo from '../src/assets/logo.png'
import { navLinks } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false);
  const toggleMenu = ()=> setMenuShown(prevState => !prevState);
  const navLinksEl  = navLinks.map(x => {
    return(
      <div key={navLinks.indexOf(x)} className='md:after:block md:after:h-0.5 md:after:rounded-sm md:after:w-0 md:after:bg-lime-500 md:after:mx-auto md:after:duration-300 md:hover:after:w-full md:cursor-pointer'>
        <a href={x.route} className="uppercase font-semibold text-lime-700 md:text-white md:text-base text-xl"> {x.label} </a>
      </div>
    );
  });

  return (
    <div className="flex justify-between items-center mx-auto py-8 container">
      <a href="/">
        <img className='w-40' src={logo} alt="logo"/>
      </a>
      <div className={`flex md:flex-row md:justify-between flex-col md:items-center md:w-2/3 w-64 md:bg-none bg-gradient-to-r from-lime-100 to-lime-300 md:h-auto h-screen md:static absolute top-0 ${menuShown ? `right-0` : `-right-64`} z-10 gap-8 px-8 py-32 md:py-0 md:gap-16 duration-200`}>
        <FontAwesomeIcon icon={faTimes} className="text-lime-700 text-4xl md:hidden absolute right-8 top-12 cursor-pointer" onClick={toggleMenu}/>
        {navLinksEl}
      </div>
      <FontAwesomeIcon icon={faBars} className="text-white text-3xl md:hidden" onClick={toggleMenu}/> 
    </div>
  )
}
export default Navbar