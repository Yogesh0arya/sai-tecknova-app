import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Courses() {
    useEffect(() => {
        AOS.init({
          duration: 2000,
          once: true,
        });
      }, []);
    return (
        <div id="courses" className="bg-gray-100 mt-24 py-8">
            <div className="max-w-6xl xl:mx-auto mx-5">
                <h1 data-aos="fade-down" className="text-4xl font-bold text-center my-8 text-black">Courses</h1>
                <div className="space-y-16 border-l-2 border-blue-700">
                    <div data-aos="fade-down" className="pl-8 relative grid grid-cols-1 lg:grid-cols-4 lg:gap-x-8">
                        <div className="absolute w-8 h-8 -left-4 rounded-full bg-blue-700"/>
                        <h1 className="font-semibold text-lg text-black">Certificate Courses</h1>
                        <p className="lg:col-span-2 mb-2 lg:m-0 text-blue-800 font-semibold">B.E. Course (Specialized for Anna University, Chennai) Computer Science and Engineering Courses only (Bilingual - English & Tamil)</p>
                        <p className="text-md text-gray-600">Consultancy Foreign Admission B.Sc./M.Sc./B. E/M. E/Ph.D. (Taiwan/China/U. K/U.S.A)</p>
                    </div>
                    
                    <div data-aos="fade-down" className="pl-8 relative grid grid-cols-1 lg:grid-cols-4 lg:gap-x-2">
                        <div className="absolute w-8 h-8 -left-4 rounded-full bg-blue-700"/>
                        <h1 className="font-semibold text-lg text-black">Internship (For B.E/B.Sc./B.C.A/M.C.A / M.Sc. / M.E) (All Semesters)</h1>
                        <p className="lg:col-span-2 mb-2 lg:m-0 text-blue-800 font-semibold">Project (For B.Sc./B.C.A/ M.C.A / M.Sc. / M.E)</p>
                        <p className="text-md text-gray-600">Computer Programming Languages</p>
                    </div>
                    
                    <div data-aos="fade-down" className="pl-8 relative grid grid-cols-1 lg:grid-cols-4 lg:gap-x-2">
                        <div className="absolute w-8 h-8 -left-4 rounded-full bg-blue-700"/>
                        <h1 className="font-semibold text-lg text-black">Short term Industry Oriented Courses</h1>
                        <p className="lg:col-span-2 mb-2 lg:m-0 text-blue-800 font-semibold">Mentorship (For Computer Science Students – B.E./B.Sc./B.C.A/M.C.A/M.E)</p>
                        <p className="text-md text-gray-600">K12</p>
                    </div>
                    
                    <div data-aos="fade-down" className="pl-8 relative grid grid-cols-1 lg:grid-cols-4 lg:gap-x-2">
                        <div className="absolute w-8 h-8 -left-4 rounded-full bg-blue-700"/>
                        <h1 className="font-semibold text-lg text-black">TOEFL</h1>
                        <p className="lg:col-span-2 mb-2 lg:m-0 text-blue-800 font-semibold">Consultancy Foreign Admission B.Sc./M.Sc./B. E/M. E/Ph.D. (Taiwan/China/U. K/U.S.A)</p>
                        <p className="text-md text-gray-600">Consultancy Faculty Recruitment (Engineering College / University)</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Courses
