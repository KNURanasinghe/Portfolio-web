import React from 'react';
import {
    DiCss3,
    DiDart,
    DiGithub,
    DiHtml5,
    DiJavascript1,
    DiMongodb,
    DiNodejsSmall,
    DiReact
} from "react-icons/di";
import Reveal from './Reveal';

const skills =[
   { 
    category: 'Frontend',
    technologies:[
        {name: 'HTML', icon: <DiHtml5 className="mx-2 text-orange-600"/>},
        {name: 'CSS', icon: <DiCss3 className="mx-2 text-blue-600"/>},
        {name: 'JavaScript', icon:  <DiJavascript1 className="mx-2 text-yellow-600"/>},
        {name: 'React', icon: <DiReact className="mx-2 text-blue-400"/>},

    ]
},
{ 
    category: 'Fullstack',
    technologies:[
        {name: 'Node JS', icon: <DiNodejsSmall className="mx-2 text-green-500"/>},
        {name: 'MongoDB', icon: <DiMongodb className="mx-2 text-green-600"/>},
        {name: 'React', icon: <DiReact className="mx-2 text-blue-500"/>},
        {name: 'Dart', icon: <DiDart className="mx-2 "style={{ color: '#0175C2' }}/>},
        {name: 'GitHub', icon:  <DiGithub className="mx-2 text-gray-600"/>},
       

    ]
}
]

function Skills() {
  return (
    <div className='max-w-[650px] mx-auto flex flex-col justify-center px-4 pb-8 text-gray-200  md:py-12' id='skills'>
        <Reveal>
        <h2 className='mb-4 text-3xl font-bold text-center'>Skills</h2>
        <p className='mb-8 text-center'>
            I worked on varios frontend and fullstack projects. Check then <a href='#portfolio' className='underline'>there.</a>    
        </p>   
        <div className='flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 '>
            {skills.map((skill, index) =>(
                <div key={index} className='w-full p-6 border border-purple-900 rounded-lg shadow-lg bg-purple-900/20 md:w-1/2 '>
                    <h3 className='mb-4 text-xl font-bold text-center'>{skill.category}</h3>
            <div className='grid grid-cols-2 gap-4'>
                {skill.technologies.map((tech, idx)=> (
                            <div key={idx} className='flex space-x-2 item-center '>
                                <span className='text-2xl'>{tech.icon}</span> 
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div> 
        </Reveal>   
    </div>
  )
}

export default Skills
