import React from 'react'

function Section({tagline,discription}) {
  return (
    <div>
        <h2 className="text-3xl font-bold text-center">{tagline}</h2>
        <h3 className="text-xl text-center">{discription}</h3>
        
    </div>
  )
}

export default Section