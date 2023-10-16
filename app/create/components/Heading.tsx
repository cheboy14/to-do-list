import React from 'react'

interface HeadingProps{
    title:string
    description:string
}

const Heading = ({title,description}:HeadingProps) => {
  return (
   <div className='pb-5'>
    <h2 className='text-3xl font-bold '>{title}</h2>
    <h5 className='text-xs font-normal'>{description}</h5>
   </div>
  )
}

export default Heading