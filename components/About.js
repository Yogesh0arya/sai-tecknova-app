import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function About() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);
    return (
        <div id="about">
            <div className="max-w-6xl mt-24 xl:mx-auto mx-5">
                <h1 className="text-4xl font-bold text-center my-5 text-black">About</h1>
                <p data-aos="fade-up" className="text-center text-gray-700">
                    Greetings from SAI - TECKNOVA, a software skill based training and development centre for IT aspirants. Today's demand for job in IT is highly competitive due to change in IT market. IT industry expect students to be trained in field of Data Science / Analytics, Machine Learning, AI and related domains. The need for bridging the gap between the industrial demand and Universities academic curriculum is on priority. The need to make our students  to be industry ready with consistent support on improving their quality is on priority. 
    SAI TECKNOVA offers the following skill based courses through online mode to students.
                </p>

                <p data-aos="fade-up" className="text-lg font-bold mt-5 text-blue-500">Advisory Committee Members</p>
                <p data-aos="fade-up" >(Please find the attachment)</p>

            </div>
        </div>
    )
}

export default About
