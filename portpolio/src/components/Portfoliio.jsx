import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import project1 from '../assets/image1.png'
import project2 from '../assets/project2.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/image.png'
import Reveal from './Reveal'

const projects =[
    {
        img: project7,
        title: 'Efficiency-Police User side',
        description: 'Ui for frontend development using React with connecting backend.',
        links:{
            //site:'#',
            github:'https://github.com/KNURanasinghe/efficiency-police-web'
        }
    },
    
    {
        img: project2,
        title: 'Grarbage collecting system for wennapua city',
        description: 'A mobile application using Flutter and google Map API.',
        links:{
           // site:'#',
            github:'https://github.com/KNURanasinghe/GARBAGE-COLLETING-VEHICLE-TRACKING-SYSTEM-FOR-WENNAPPUWA-CITY'
        }
    },
    
    {
        img: project1,
        title: 'WEB-UI-UX-GPT-3 ',
        description: 'Ui for frontend development using React and CSS.',
        links:{
            //site:'#',
            github:'https://github.com/KNURanasinghe/WEB-UI-UX-GPT-3'
        }
    },
    
    {
        img: project4,
        title: 'TDBM-movie-app ',
        description: 'A mobile application using Flutter.',
        links:{
            //site:'#',
            github:'https://github.com/KNURanasinghe/TDBM-movie-app'
        }
    },
    
    {
        img: project5,
        title: 'Music_Player',
        description: 'A mobile application using Flutter.',
        links:{
           // site:'#',
            github:'https://github.com/KNURanasinghe/Music_Player_UI'
        }
    },
    
    {
        img: project6,
        title: 'bmw_app_using_dart_and_firebase',
        description: 'A data visualization project using D3.js and other libraries.',
        links:{
           // site:'#',
            github:'https://github.com/KNURanasinghe/bmw_app_using_dart_and_firebase'
        }
    },
]

const Portfoliio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
        <h2 className='mb-8 text-3xl font-bold text-gray-200'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full p-4 md:w-1/2'>
                    <img src={project.img}
                    alt={project.title}
                    className='object-cover w-full h-full rounded-lg shadow-lg'
                    />
                </div>
                <div className='flex flex-col justify-center w-full p-4 md:w-1/2'>
                    <h3 className='mb-4 text-2xl font-semibold text-gray-200 ' >{project.title}</h3>
                    <p className='mt-4 text-gray-200'>{project.description}</p>
                    <div className='flex space-x-4'>
                        {/* <a href={project.links.site}
                        className='px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700 '
                        >View Site</a>                         */}
                        <a href={project.links.github}
                        className='px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700 '
                        ><AiOutlineGithub/> </a>                        
                    </div>
                   
                    
                </div>
                
            </div>
            </Reveal>
        ))}
    </div>
  )
}

export default Portfoliio
