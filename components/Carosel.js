import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carosel(){
    return(
        <div className="w-64 sm:w-96 h-30 lg:text-2xl text-gray-700 mx-2">
            <Carousel  autoPlay interval="5000" transitionTime="2000" showThumbs={false} infiniteLoop showStatus={false} showIndicators={false} >
                <div>
                    <div className="mb-6">
                        <p>Industry Oriented Course</p>
                    </div>   
                </div>
                <div>
                    <div className="mb-6">
                        <p>Experiential Learning</p>
                    </div>   
                </div>
                <div>
                    <div className="mb-6">
                        <p>Trainers from Eminent Professors, Industry Experts</p>
                    </div>
                </div>
                <div>
                    <div className="mb-6">
                        <p>Skill / Project based Course Contents</p>
                    </div>   
                </div>
                <div>
                    <div className="mb-6">
                        <p>Outcome based Evaluations</p>
                    </div>   
                </div>
                <div>
                    <div className="mb-6">
                        <p>Placement Assistant</p>
                    </div>   
                </div>
                <div>
                    <div className="mb-6">
                        <p>Teaching Pedagogy developed by International Academicians and Industry Experts</p>
                    </div>   
                </div>
                <div>
                    <div className="mb-6">
                        <p>Multilingual</p>
                    </div>   
                </div>
            </Carousel>
        </div>
    )
}

export default Carosel