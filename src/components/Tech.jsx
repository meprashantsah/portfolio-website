import React from 'react'
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';


const Tech = () => {
  return (
    // <div className='flex flex-row flex-wrap justify-center gap-10 '>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon}/>
    //     </div>
    //   ))}
    // </div>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div key={technology.name} className='flex flex-col items-center'>
          <div className='w-28 h-28'>
            <BallCanvas icon={technology.icon} />
          </div>
          <p className='text-white text-[14px] mt-2 text-center'>{technology.name}</p>
        </div>
      ))}
    </div>

  )
}

export default SectionWrapper(Tech, "")