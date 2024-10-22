import Image from 'next/image';

import removeBgImage from '@/assets/images/remove-bg.png'
import htmlImg from "@/assets/images/html5-icon.png"
import cssImg from "@/assets/images/css3-logo-png.png"
import bootsrapImg from "@/assets/images/bootstrap-icon.png"
import materialuiImg from "@/assets/images/material-ui-icon.png"
import javascriptImg from "@/assets/images/javascript-logo.png"
import typescriptImg from "@/assets/images/typescript-logo.png"
import reactImg from "@/assets/images/react-icon.svg.png"
import nextImg from "@/assets/images/nextjs-icon.png"
import nodeImg from "@/assets/images/nodejs-icon-logo-png-transparent.png"
import mysqlImg from "@/assets/images/mysql-logo.png"
import monodbImg from "@/assets/images/mongodb-logo.png"
import firebaseImg from "@/assets/images/firebase-img.png"
import MyProjects from './components';


export default function Home() {
  const skills = [
    { name: 'HTML', src: htmlImg, skillClass: 'html' },
    { name: 'CSS', src: cssImg, skillClass: 'css' },
    { name: 'Bootsrap', src: bootsrapImg, skillClass: 'bootstrap' },
    { name: 'Material Ui', src: materialuiImg, skillClass: 'material-ui' },
    { name: 'JavaScript', src: javascriptImg, skillClass: 'javascript' },
    { name: 'TypeScript', src: typescriptImg, skillClass: 'typescript' },
    { name: 'React.js', src: reactImg, skillClass: 'react' },
    { name: 'Next.js', src: nextImg, skillClass: 'next' },
    { name: 'Node.js', src: nodeImg, skillClass: 'node' },
    { name: 'MySql', src: mysqlImg, skillClass: 'mysql' },
    { name: 'MongoDb', src: monodbImg, skillClass: 'mongodb' },
    { name: 'FireBase', src: firebaseImg, skillClass: 'firebase' },
  ]

  return (
    <div>
      <div className="top" id="top">

        <div className="intro-section">
          <div className="intro" data-aos="fade-right">
            <h1>Hi,</h1>
            <h1 className="my-name">This Is Saad Ahmed.</h1>
            <h3>Web Developer</h3>
            <br /><br />

            <button className="contact-button"><a href="../images/SaadAhmedResume.pdf">Download Resume</a></button>
          </div>
          <div className="image-main-div" data-aos="fade-up">
            <div className="my-image">
              <Image src={removeBgImage} alt="my-image" />
            </div>
          </div>

        </div>
      </div>

      <div className="center">
        <div className="about" id="about" data-aos="fade-up">
          <h1>About</h1>
          <p>Hello! I&apos;m Saad Ahmed, a dedicated MERN Stack Developer with over a year of experience in building
            dynamic,
            high-performing web applications. I specialize in <b>React.js</b> and <b>Next.js</b>, leveraging
            <b>TypeScript</b> to enhance
            functionality and ensure maintainable code.<br />On the backend, I have strong proficiency in
            <b>Node.js</b>,
            <b>MongoDB</b>, <b>MySQL</b>, and <b>PostgreSQL</b>, allowing me to efficiently manage data and develop
            robust server-side applications.
            I am passionate about creating seamless user experiences and continuously improving my skills to stay at
            the forefront of web development.<br />
            Feel free to explore my portfolio to see some of my recent projects!

          </p>
        </div>
      </div><br /><br />
      <div>

        <div className="skills-h1" id="skills">
          <h1 data-aos="fade-down">Skills</h1>
        </div>
        <br /><br />

        <div className="skills-div" data-aos="fade-up">
          {skills.map((skill, index) => {
            const { name, src, skillClass } = skill
            return (
              <div key={index} className="skills-content">
                <Image className={skillClass} src={src} alt="skills-img" />
                <h3>{name}</h3>
              </div>
            )
          })}

        </div>
      </div>
      <br /><br />

      <MyProjects />

      <div className="contact-form" data-aos="fade-up">
        <form id="form">
          <div className="form">
            <h1>Contact</h1>
            <p>Would you like to work with me?</p>
            <input type="text" placeholder="Name" name="name" id="name" />
            <input type="number" placeholder="Contact-Number" name="number" id="contact" />
            <input type="email" placeholder="Email" name="email" id="email" />
            <input type="text" placeholder="Enter Your Message" name="message" id="message" />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>

    </div>
  );
}
