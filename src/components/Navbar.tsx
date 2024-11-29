'use client'
import { TbHandClick } from "react-icons/tb";
import Link from 'next/link'


const Navbar = () => {
  return (
    <div  className=" sm:bg-green-300 bg-green-300 ">
      <header className="text-blackbody-font font-extrabold sm:font-extrabold">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center rounded">
    <Link href='/'  className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-4xl sm:text-2xl font-bold">Portfoilo</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center rounded">
      <Link href='/' className="mr-5 hover:text-Black-100">Home</Link>
      <Link href='#Aboutme' className="mr-5 hover:text-Black-100">About</Link>
      <Link href='#Skills' className="mr-5 hover:text-Black-100">Skills</Link>  
      <Link href='#Projects' className="mr-5 hover:text-Black-100">Projects</Link>
      <Link href='#Contact' className="mr-5 hover:text-Black-100">Contact</Link>
    </nav>
    <Link href="https://milestone1-static-resume-gamma.vercel.app/" target="_blank">
    <button className=" inline-flex items-center bg-white rounded-lg border-0 py-1 px-3 focus:outline-none hover:bg-white text-base mt-4 md:mt-0">
        Veiw Resume
        <TbHandClick className='text-xl ml-1'/>
    </button>
    </Link>
  </div>
</header>
    </div>
  )
}

export default Navbar
