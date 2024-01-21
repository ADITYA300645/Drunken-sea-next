import React from 'react'

function Section({tagline,discription}) {
  return (
    <div className='px-4 my-4'>
        <h2 className="text-3xl font-bold text my-2">{tagline}</h2>
        <h3 className="text-sm text">{discription}</h3>

    </div>
  )
}

export default Section