import "./experience.css";
function Experience() {
    return (




        <div className="flex flex-col items-center justify-center w-full h-full pt-6 space-y-5 ">

            <div className="transition-all cardBoard-container hover:bg-black/5" style={{ backgroundImage: `url("/images/yariLogo.svg")` }}>

                <div className="cardBoard-text">
                    <div>Role: Front-End Developer </div>
                    <div><a href="YariCertificate.pdf" target='_blank' rel='noopener noreferrer' className="underline transition hover:text-orange-400">Certificate</a></div>
                    <div>Project link: <a href="https://www.mydharma.network/" target='_blank' rel='noopener noreferrer' className="underline transition hover:text-orange-400">www.mydharma.network</a></div>
                </div>

            </div>
            <div className="cardBoard-container ">
                <div className="flex items-center justify-center w-full h-full text-center text-black">
                    Your Company?
                </div>
            </div>
        </div>



    )
}

export default Experience