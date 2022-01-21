import { CheckIcon } from '@heroicons/react/outline'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Career() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);
    return (
        <div id="career" className="mt-28">
            <div className="max-w-6xl xl:mx-auto mx-5">
                <h1 className="text-4xl font-bold text-center my-8 text-black">Careers</h1>
                <p>
                <span className="text-xl font-semibold">SAI Tecknova</span> is an ed-tech startup proudly on a mission to up-skill students, industry persons across India.
We aim to nurture quality tech talent by imparting skills based on emerging technologies — IoT, AI, ML, Robotics — hence, making students employable for the 21st century tech jobs. To begin with, we are offering courses on AI, Data Science, Embedded Systems & IoT, and Machine Learning.
Job Description: Data Science, AI/ML/NLP, Augment Reality, Game Designing , Digital Marketing, JEE, GATE, TOEFL and Computer Programming language trainer.
Work as a Trainer/Faculty member and conduct offline as well as online training sessions across India. Offline training is conducted at classrooms based in Coimbatore, Tamil Nadu and may involve travel across India to give specialised training in colleges & industry. We prefer the trainers from Tamil Nadu, Andhra Pradesh, Telangana, Karnataka, and Maharashtra
                </p>
                
                <div className="my-5">
                    <h1 className="text-2xl font-bold mb-2">Key Responsibilities:</h1>
                    <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Takes classes for training batches of Data Science/ML/AI, IoT, Augment Reality, Digital Marketing, Game Designing</p>
                    <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Conduct Classroom as well as Virtual Classroom Sessions</p>
                    <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Prepare Test & Practice Exercises and create run time environment for them</p>
                    <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Delivering Practical Hands-on Workshop sessions</p>
                    <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Preparing power point presentation and technical content for the said technologies for students</p>
                    <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Solving problems and discussing solutions with learners.</p>
                    
                </div>

                <div className="my-5">
                    <h1 className="text-2xl font-bold mb-2">Qualification and Skills Required:</h1>
                    <div>
                        <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Very good understanding of Data Science and ML Concepts</p>
                        <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Working experience with Live Data Science and ML Projects</p>
                        <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Deep knowledge of math, probability, statistics and algorithms</p>
                        <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Ability to write robust code in Python and R</p>
                        <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Strong work experience with NumPy, Pandas and Matplotlib, sklearn, kerns and tensorflow libraries</p>
                        <p className="flex"><CheckIcon className="w-5 text-green-500 mr-2"/> Excellent Teaching skills</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-x-8 my-10">
                    <p><span className="text-violet-500 mr-1">●</span> Employment Type: Part-Time</p>
                    <p><span className="text-violet-500 mr-1">●</span> Minimum Experience: More than 3 Years </p>
                    <p><span className="text-violet-500 mr-1">●</span> Salary             : hourly basis</p>
                    <p><span className="text-violet-500 mr-1">●</span> Location:   Work From Home</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                    <div data-aos="fade-right" className="px-4 py-6 bg-green-200 shadow-lg rounded-lg">
                        <h1 className="text-2xl mb-2 font-bold">Benefits:</h1>
                        <div className="text-gray-700 space-y-2">    
                            <p>● Flexible schedule</p>
                            <p>● Attractive incentive, based on the performance</p>
                            <p>● Additional allowances</p>
                        </div>
                    </div>

                    <div data-aos="fade-left" className="px-4 py-6 bg-green-200 shadow-lg rounded-lg">
                        <h1 className="text-2xl mb-2 font-bold">Schedule:</h1>
                        <div className="text-gray-700 space-y-2">
                            <p>● Day shift</p>
                            <p>● Fixed shift</p>
                            <p>● Morning shift</p>
                            <p>● Rotational shift</p>
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Career
