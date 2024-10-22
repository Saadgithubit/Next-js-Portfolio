import { faFacebook, faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bottom">

            <div className="top-link">
                <Link href={'#top'}>
                    <FontAwesomeIcon className="w-14 text-white cursor-pointer" icon={faAngleUp} />
                </Link>
            </div>
            <div className="fonts">

                <Link href="https://www.facebook.com/saad.sohail.7315"><FontAwesomeIcon className="w-10" icon={faFacebook} /></Link>
                <Link href="https://www.instagram.com/saadonlinecollection/"><FontAwesomeIcon className="w-10" icon={faInstagram} /></Link>
                <Link href="https://www.linkedin.com/in/saad-ahmed-70894b247/"><FontAwesomeIcon className="w-10" icon={faLinkedin} /></Link>
                <Link href="https://github.com/Saadgithubit"><FontAwesomeIcon className="w-10" icon={faGithub} /></Link>
                <Link href="https://wa.me/03111640243"><FontAwesomeIcon className="w-10" icon={faWhatsapp} /></Link>

            </div>
            <div className="line">

            </div>
        </div>
    )
}