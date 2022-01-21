import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Highlights() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);
    return (
        <div>
            <div id="highlights" className="max-w-2xl mt-24 md:mx-auto mx-5 ">
                <div data-aos="fade-right" className="px-5 py-10 rounded-lg  bg-blue-700">
                    <h1 className="text-4xl font-bold text-center my-5 text-blue-200">Highlights</h1>
                    <div className="flex items-center">
                        <div className="mx-auto space-y-2 mb-8 md:text-lg text-blue-300">
                            <p>● Skill / Project based Teaching</p>
                            <p>● Free Placement Assistance</p>
                            <p>● Flexible Timings 24 x 7</p>
                            <p>● Free recorded sessions</p>
                            <p>● Free Assistance – International Internship</p>
                            <p>● Opportunity to interact with Eminent Foreign Professors, International Industry Experts </p>
                        </div>    
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Highlights
