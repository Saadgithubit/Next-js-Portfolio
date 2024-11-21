import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bottom w-full text-white sm:h-[200px] flex flex-col justify-center items-center p-5">
            <div className="w-full sm:w-[75%] lg:w-[65%] xl:w-[55%] flex justify-between sm:p-8">
                <Link className="hover:scale-125 transition-all duration-300" href="https://www.facebook.com/saad.sohail.7315">
                    <FontAwesomeIcon className="w-8 sm:w-10" icon={faFacebook} /></Link>
                <Link className="hover:scale-125 transition-all duration-300" href="https://www.instagram.com/saadonlinecollection/">
                    <FontAwesomeIcon className="w-8 sm:w-10" icon={faInstagram} /></Link>
                <Link className="hover:scale-125 transition-all duration-300" href="https://www.linkedin.com/in/saad-ahmed-70894b247/">
                    <FontAwesomeIcon className="w-8 sm:w-10" icon={faLinkedin} /></Link>
                <Link className="hover:scale-125 transition-all duration-300" href="https://github.com/Saadgithubit">
                    <FontAwesomeIcon className="w-8 sm:w-10" icon={faGithub} /></Link>
                <Link className="hover:scale-125 transition-all duration-300" href="https://wa.me/03111640243">
                    <FontAwesomeIcon className="w-8 sm:w-10" icon={faWhatsapp} /></Link>

            </div>
            <div className="w-[90%] sm:w-[70%] lg:w-[60%] xl:w-1/2 border-2 mt-5">

            </div>
        </div>
    )
}