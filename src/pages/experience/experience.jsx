import TopBar from "../../components/topBar/topBar"
import "./experience.css";
function Experience() {
    return (

        <div>
            <TopBar name="Experience" />
            <div class="experience-container ">
                <div class="w-full h-full flex justify-center pt-6 flex-col items-center space-y-5">

                    <div class="cardBoard-container transition-all hover:bg-black/5" style={{ backgroundImage: `url("/images/yariLogo.svg")` }}>

                        <div class="cardBoard-text">
                            <div>Function: Front-End Developer </div>
                            <div><a href="YariCertificate.pdf" target='_blank' rel='noopener noreferrer' className="underline hover:text-orange-400 transition">Certificate</a></div>
                            <div>Project link: <a href="https://www.mydharma.network/" target='_blank' rel='noopener noreferrer' className="underline hover:text-orange-400 transition">www.mydharma.network</a></div>
                        </div>

                    </div>
                    <div className="cardBoard-container ">
                        <div className="h-full w-full text-black text-center flex justify-center items-center">
                            Your Company?
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Experience