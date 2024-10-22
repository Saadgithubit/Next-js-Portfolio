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
import nextPosgress from "@/assets/images/next-posgree-pic.jpg"
import weather from "@/assets/images/weather-pic.jpg"
import digitalAgency from "@/assets/images/digitalagency-pic.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import Link from "next/link";

export default function MyProjects() {

    const projects = [
        {
            title: 'Ecommerce Website', demoSrc: 'https://saphhire.vercel.app/', githubsrc: 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/Mernstack-Project',
            text: 'This eCommerce website is a fully functional online shopping platform designed to provide users with a seamless shopping experience. Built with a modern tech stack, this application connects to a Node.js backend and utilizes MongoDB for database management. The frontend is developed using React.js, styled with Bootstrap, and enhanced with custom CSS for a responsive design.', src: sapphire
        },
        {
            title: 'Olx Clone', demoSrc: 'https://olx-clone-ebon.vercel.app/', githubsrc: 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/Olx-Clone-Website',
            text: 'This OLX clone website is a dynamic online marketplace designed to facilitate the buying and selling of goods. Developed using a modern tech stack, this application incorporates Firebase for authentication and Firestore for database management. The frontend is crafted with React.js, styled with Bootstrap, and enhanced with custom CSS to deliver a responsive and user-friendly experience.', src: olx
        },
        {
            title: 'Meme Generator', demoSrc: 'https://meme-generator-five-teal.vercel.app/', githubsrc: 'https://github.com/Saadgithubit/Smit-Next-JS-Projects/tree/main/meme-generator',
            text: 'This Meme Generator website allows users to create and share memes effortlessly. Leveraging a meme-fetching API, this application is built with Next.js for server-side rendering and optimized performance, while Tailwind CSS is used for a modern, responsive design. The site provides a fun and interactive way for users to generate custom memes based on popular templates.', src: meme
        },
        {
            title: 'Next Js + Posgress', demoSrc: 'https://nextjs-postgresql-three.vercel.app/', githubsrc: 'https://github.com/Saadgithubit/nextjs-postgresql',
            text: 'This project is a CRUD (Create, Read, Update, Delete) application built with Next.js, leveraging TypeScript for type safety and Tailwind CSS for a modern, responsive design. The application connects to a PostgreSQL database to manage data effectively, providing users with a seamless experience for handling various data entries.', src: nextPosgress
        },
        {
            title: 'Weather Web App', demoSrc: 'https://currentweatherweb.netlify.app', githubsrc: 'https://github.com/Saadgithubit/Smit-react-Assignments/tree/main/weather-app',
            text: 'This Weather Checking website allows users to easily check the weather conditions of any location worldwide. Built with React.js, this application fetches data from a weather API to provide real-time weather updates. The user interface is styled using Bootstrap and custom CSS, ensuring a responsive and engaging experience', src: weather
        },
        {
            title: 'Digital Agency UI', demoSrc: 'https://digitalagentweb.netlify.app/', githubsrc: 'https://github.com/Saadgithubit/digitalagency.github.io',
            text: "This project features a beautifully designed user interface for a digital agency website, created using HTML and CSS. The website aims to showcase the agency's services, portfolio, and contact information in a visually appealing and user-friendly manner.", src: digitalAgency
        },
    ]

    return (

        <div id="projects">
            <h1>My Projects</h1>

            <div className="projects-div" data-aos="fade-down">
                {projects.map((project, index) => {
                    const { title, text, src, demoSrc, githubsrc } = project
                    return (
                        <Card sx={{ background: 'linear-gradient(#203583,#0f132b,#070440,#010632)' }}
                            key={index}
                            className="md:w-[80%] lg:w-[47%] xl:w-[32%] 2xl:w-[30%] p-2 text-white shadow h-[670px] md:h-[620px] lg:h-[660px] xl:h-[670px] 2xl:h-[610px] rounded-xl relative">
                            <div className="border-2 w-full bg-white pb-2 opacity-80 rounded-xl hover:opacity-100">
                                <Image className="w-[80%] h-[150px] md:h-[200px] mx-auto object-fill aspect-square" src={src} alt='project' />
                            </div>
                            <div className="border-b-2 border-white opacity-80 h-4"></div>
                            <CardContent className="text-center opacity-90">
                                <Typography className="font-bold text-2xl" gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography className="text-lg px-4 text-justify mt-4" variant="body2">
                                    {text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{ width: '100%', display: 'flex', pl: 3, gap: 2, position: 'absolute', bottom: '15px' }}>
                                    <Link href={demoSrc}>
                                        <Button className="bg-gradient-to-r from-[#85116B] to-[#46438F] px-9 py-3 text-white">
                                            <FontAwesomeIcon className='w-5 mr-2' icon={faPaperclip} />Demo</Button>
                                    </Link>
                                    <Link href={githubsrc}>
                                        <Button className="bg-gradient-to-r from-[#85116B] to-[#46438F] px-8 py-3 text-white mr-3">
                                            <FontAwesomeIcon className='w-6 mr-2' icon={faGithub} />Github</Button>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>)
                })}
            </div>
        </div>
    )
}