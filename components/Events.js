import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Events() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);
    return (
        <div id="events" className="mt-36 py-24 bg-gray-100">
            <div className="max-w-6xl xl:mx-auto mx-5">
                <h1 className="text-4xl font-bold text-center my-5 text-black">Events</h1>
                <p className="text-xl text-blue-800 font-semibold mb-5 pb-2 border-b-2 border-blue-800">Upcoming Events</p>
                    <div className="text-gray-600 text-xl font-semibold gap-y-10 grid lg:grid-cols-2 lg:gap-x-8">
                        <div data-aos="fade-right" className="flex flex-col items-center space-y-5 bg-white rounded-lg shadow-lg transition duration-200 ease-out hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="/exam.png" className="m-5 w-96 h-96 object-contain"/>
                            <p className="bg-pink-100 flex-grow w-full rounded-b-lg text-center p-5">National Scholarship Test 2022 (Avail 50 rounded-b-lg% Scholarship for all the courses – Top 1000 students)</p>
                        </div>
                        <div data-aos="fade-left" className="flex flex-col items-center space-y-5 bg-white rounded-lg shadow-lg transition duration-200 ease-out hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="/hackathon.png" className="m-5 w-96 h-96 object-contain"/>
                            <p className="bg-green-100 flex-grow w-full rounded-b-lg text-center p-5">Hackathon 2022</p>
                        </div>
                        <div data-aos="fade-right" className="flex flex-col items-center space-y-5 bg-white rounded-lg shadow-lg transition duration-200 ease-out hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="/blogathon.png" className="m-5 w-96 h-96 object-contain"/>
                            <p className="bg-blue-100 flex-grow w-full rounded-b-lg text-center p-5">Blogathon 2022</p>
                        </div>
                        <div data-aos="fade-left" className="flex flex-col items-center space-y-5 bg-white rounded-lg shadow-lg transition duration-200 ease-out hover:scale-105 hover:shadow-xl cursor-pointer">
                            <img src="/Code-a-Thon.png" className="m-5 w-96 h-96 object-contain"/>
                            <p className="bg-violet-100 flex-grow w-full rounded-b-lg text-center p-5">Code-A-Thon 2022</p>
                        </div>
                                              
                    </div>    
            </div>
        </div>
    )
}

export default Events
