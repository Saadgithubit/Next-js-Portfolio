import Image from "next/image"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import sapphire from "@/assets/images/sapphire-pic.jpg"
import olx from "@/assets/images/olx-pic.jpg"
import meme from "@/assets/images/meme-pic.jpg"
import weather from "@/assets/images/weather-pic.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

export default function MyProjects() {

    const projects = [
        { title: 'Ecommerce Website', text: 'This eCommerce website is a fully functional online shopping platform designed to provide users with a seamless shopping experience. Built with a modern tech stack, this application connects to a Node.js backend and utilizes MongoDB for database management. The frontend is developed using React.js, styled with Bootstrap, and enhanced with custom CSS for a responsive design.', src: sapphire },
        { title: 'Olx Clone', text: 'This OLX clone website is a dynamic online marketplace designed to facilitate the buying and selling of goods. Developed using a modern tech stack, this application incorporates Firebase for authentication and Firestore for database management. The frontend is crafted with React.js, styled with Bootstrap, and enhanced with custom CSS to deliver a responsive and user-friendly experience.', src: olx },
        { title: 'Meme Generator', text: 'This Meme Generator website allows users to create and share memes effortlessly. Leveraging a meme-fetching API, this application is built with Next.js for server-side rendering and optimized performance, while Tailwind CSS is used for a modern, responsive design. The site provides a fun and interactive way for users to generate custom memes based on popular templates.', src: meme },
        { title: 'Weather Web App', text: 'This Weather Checking website allows users to easily check the weather conditions of any location worldwide. Built with React.js, this application fetches data from a weather API to provide real-time weather updates. The user interface is styled using Bootstrap and custom CSS, ensuring a responsive and engaging experience', src: weather },
    ]

    return (

        <div id="projects">
            <h1>My Projects</h1>

            <div className="projects-div" data-aos="fade-down">
                {projects.map((project, index) => {
                    const { title, text, src } = project
                    return (
                        <Card sx={{ background: 'linear-gradient(#203583,#005195,#070440,#010632)' }}
                            key={index} className="lg:w-[45%] xl:w-[35%] 2xl:w-[23%] py-4 text-white shadow h-[630px] md:h-[620px] lg:h-[620px] xl:h-[600px]  relative">
                            <Image className="w-[80%] mx-auto" src={src} alt='project' />
                            <CardContent className="text-center">
                                <Typography className="font-bold text-2xl" gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography className="text-lg px-4 text-justify mt-4" variant="body2">
                                    {text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 2, position: 'absolute', bottom: '15px' }}>

                                    <Button className="bg-gradient-to-r from-[#85116B] to-[#46438F] px-9 py-3 text-white">
                                        <FontAwesomeIcon className='w-5 mx-2' icon={faPaperclip} />Demo</Button>
                                    <Button className="bg-gradient-to-r from-[#85116B] to-[#46438F] px-8 py-3 text-white mr-3">
                                        <FontAwesomeIcon className='w-6 mx-2' icon={faGithub} />Github</Button>
                                </Box>
                            </CardActions>
                        </Card>)
                })}
            </div>
        </div>
    )
}