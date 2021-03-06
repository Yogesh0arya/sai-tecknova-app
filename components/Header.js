import {
    SearchIcon,
    MenuIcon,
    ChevronDownIcon
} from '@heroicons/react/outline'
import { PhoneIcon } from '@heroicons/react/solid'
import Sidebar from './Sidebar'
import { Menu } from '@headlessui/react'
import { Link } from "react-scroll";

function Header() {
    return (
        <div className="bg-white shadow-md">
            <div className="flex justify-between max-w-screen-2xl xl:mx-auto items-center mx-5 py-3 xl:px-3">
                {/* left */}
                <div className="cursor-pointer flex items-center flex-col justify-center pl-14 lg:pl-0">
                    <Sidebar />
                    <h1 className="font-bold text-blue-700 text-lg sm:text-xl md:text-4xl flex-shrink-0">SAI Tecknova</h1>
                    <p className="ml-2 text-xs md:text-md text-gray-500">(Experiential Learning)</p>
                </div>
                

                {/* right */}
                <div className="flex lg:hidden items-center justify-end space-x-8">
                    
                    <Menu as='div' className="relative" >
                        <Menu.Button>
                            <button className="text-xs flex items-center rounded-lg bg-blue-500 text-white p-1 sm:p-2 hover:shadow-lg active:bg-blue-800">
                                <ChevronDownIcon className="w-3"/>All Programs
                            </button>
                        </Menu.Button>
                        {/* menu list */}
                        <Menu.Items className="absolute z-30 font-semibold bg-blue-500 p-4 right-0 mt-1 w-40 rounded-md text-white shadow-md space-y-3">
                            <p  className="hover:text-black cursor-pointer">Privacy Policy</p>
                            <p  className="hover:text-black cursor-pointer">About us</p>
                            <p  className="hover:text-black cursor-pointer">Contact us</p>
                            <p  className="hover:text-black cursor-pointer">SignIn</p>
                        </Menu.Items>
                    </Menu>
                    

                </div> 
                <div className="hidden lg:flex lg:space-x-4 xl:space-x-6">
                    <Link  className="navBtnLg" to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                    <Link  className="navBtnLg" to="courses" spy={true} smooth={true} offset={50} duration={500}>Courses</Link>
                    <Link  className="navBtnLg" to="highlights" spy={true} smooth={true} offset={50} duration={500}>Highlights</Link>
                    <Link  className="navBtnLg" to="events" spy={true} smooth={true} offset={50} duration={500}>Events</Link>
                    <Link  className="navBtnLg" to="industry" spy={true} smooth={true} offset={50} duration={500}>Industry Partners</Link>
                    <Link  className="navBtnLg" to="awards" spy={true} smooth={true} offset={50} duration={500}>Awards</Link>
                    <Link  className="navBtnLg" to="career" spy={true} smooth={true} offset={50} duration={500}>Careers</Link>
                    <Link  className="navBtnLg" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact us</Link>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header
