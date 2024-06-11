import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import Reveal from './Reveal';

const projects =[
    {
        img: project1,
        title: 'Project 1',
        description: 'Ui for frontend development using React.',
        links:{
            site:'#',
            github:'#'
        }
    },
    
    {
        img: project2,
        title: 'Project 2',
        description: 'A fullstack application build with Node.js and mongoDB.',
        links:{
            site:'#',
            github:'#'
        }
    },
    
    {
        img: project3,
        title: 'Project 3',
        description: 'An e- commerce platform with varios features.',
        links:{
            site:'#',
            github:'#'
        }
    },
    
    {
        img: project4,
        title: 'Project 4',
        description: 'An e- commerce platform with varios features.',
        links:{
            site:'#',
            github:'#'
        }
    },
    
    {
        img: project5,
        title: 'Project 5',
        description: 'A mobile application using React Native.',
        links:{
            site:'#',
            github:'#'
        }
    },
    
    {
        img: project6,
        title: 'Project 6',
        description: 'A data visualization project using D3.js and other libraries.',
        links:{
            site:'#',
            github:'#'
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
                        <a href={project.links.site}
                        className='px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700 '
                        >View Site</a>                        
                        <a href={project.links.github}
                        className='px-4 py-2 text-gray-200 transition duration-300 rounded-lg bg-slate-600 hover:bg-slate-700 '
                        ><AiOutlineGithub/></a>                        
                    </div>
                   
                    
                </div>
                
            </div>
            </Reveal>
        ))}
    </div>
  )
}

export default Portfoliio
