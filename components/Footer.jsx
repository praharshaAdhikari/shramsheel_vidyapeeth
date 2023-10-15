import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faEnvelope, faPhone,  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons'
import logo from '../src/assets/logo.png'

const Footer = () => {
  return (
    <section className='bg-lime-900 text-lime-100 py-12'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between md:items-center gap-16 lg:px-10'>
        <div className='flex flex-col mx-auto items-center text-center max-w-[28rem]'>
          <div className='flex items-center cursor-pointer mb-4'>
            <img src={logo} alt="logo" className="w-40"/>
            {/* <div className='text-lg leading-5 font-bold pl-3'>
              <h3>Shramsheel</h3>
              <h3>Vidyapith</h3>
            </div> */}
          </div>
          <h4 className='text-md'>Shramsheel Vidyapith (SVN), established in 2003 AD, is a non-profitable school run by NDHCN. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta maxime voluptates et perspiciatis, at labore quia sunt.</h4>
        </div>
        <div>
          <h2 className='text-3xl uppercase font-semibold mb-4'> Info </h2>
          <div className='flex gap-3 py-1.5 items-center'>
            <FontAwesomeIcon icon={faLocationArrow}/>
            <a href='/' className='text-md'>Kageshwori Manohara - 8, Kathmandu, Nepal</a>
          </div>
          <div className='flex gap-3 py-1.5 items-center'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <a href='/' className='text-md'>svnschool77@gmail.com</a>
          </div>
          <div className='flex gap-3 py-1.5 items-center'>
            <FontAwesomeIcon icon={faPhone}/>
            <a href='/' className='text-md'>01-499320</a>
          </div>
        </div>
        <div>
          <h2 className='text-3xl uppercase font-semibold mb-4 w-max'> Follow Us </h2>
          <div className='flex gap-3 py-1.5 items-center'>
            <FontAwesomeIcon icon={faFacebook}/>
            <a href='/' className='text-md'>Facebook</a>
          </div>
          <div className='flex gap-3 py-1.5 items-center'>
            <FontAwesomeIcon icon={faInstagram}/>
            <a href='/' className='text-md'>Instagram</a>
          </div>
          <div className='flex gap-3 py-1.5 items-center'>
            <FontAwesomeIcon icon={faViber}/>
            <a href='/' className='text-md'>Viber</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer