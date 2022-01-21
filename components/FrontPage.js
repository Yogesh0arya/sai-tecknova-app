import Image from "next/image"
import { PlayIcon, ArrowDownIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Carosel from './Carosel'

function FrontPage() {
    return (
        <div>
            <div className=''>
                <div className="relative h-[400px] lg:h-[500px] ">
                    <Image 
                        src="/bgground.jpg" 
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className='absolute top-20 sm:top-1/4 lg:top-28 w-full text-center  flex flex-col space-y-6 lg:flex-row-reverse'>
                    <div className="relative flex mx-auto items-center justify-center">
                        <PlayIcon className="w-16 z-20 lg:w-24 text-white "/>
                        <div className='absolute lg:w-16 lg:h-16 w-12 h-12 rounded-full bg-white opacity-40 animate-ping'/>
                    </div>
                    

                    {/* Card */}
                    <div className="bg-white rounded-lg shadow-lg p-6 text-gray-500 w-auto mx-auto flex flex-col justify-start">
                        <p className='text-lg mb-4 mr-3 border-b border-gray-200 lg:text-2xl'>HOME<span className="text-xs text-blue-200">SAI Tecknova</span></p>
                        <Carosel/>
                        <div className='flex justify-around mb-2'>
                            <div className="flex">
                                {
                                    [...Array(5)].map((_, i)=>(
                                    <StarIcon className="w-4 text-yellow-400"/>
                                    ))
                                }
                                
                                <p className="ml-2">581 Ratings</p>
                            </div>
                            <p>● 11 Months</p>
                        </div>
                        <p>● Online Mentorship</p>
                        <div className="hidden lg:inline">
                            <button className='text-white mr-3 bg-blue-500 px-10 py-4 shadow-md rounded-lg font-bold my-3 hover:shadow-xl active:shadow-sm active:scale-95 transition duration-150'>Apply now</button>
                            <button className='text-black bg-white border-2 border-black px-3 py-4 shadow-md rounded-lg font-bold my-3 hover:shadow-xl active:shadow-sm active:scale-95 transition duration-150'>Download Brochure</button>
                        </div>
                        <p className="text-orange-600 hidden lg:inline">Applications Close Today</p>
                
                    </div>

                    <div className="flex flex-col w-72 sm:w-96 lg:hidden mx-auto space-y-2">
                        <button className='text-white bg-blue-500 py-4 shadow-md rounded-lg font-bold  hover:shadow-xl active:shadow-sm active:scale-95 transition duration-150'>Apply now</button>
                        <button className='text-black bg-white border-2 border-black  py-4 shadow-md rounded-lg font-bold  hover:shadow-xl active:shadow-sm active:scale-95 transition duration-150'>Download Brochure</button>
                    </div>
                    <p className="text-orange-600 lg:hidden">Applications Close Today</p>
                </div>

                {/* <div className="max-w-6xl mx-auto">
                    <h1>I'm the front page</h1>        
                </div> */}
            </div>
            
        </div>
    )
}
    
export default FrontPage