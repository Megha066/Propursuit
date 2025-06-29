import React from 'react'

function Routetree() {
  return (
    
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Interactive Diagram
      </h2>

      <div className="w-full max-w-4xl aspect-[16/9] shadow-lg rounded-lg overflow-hidden border border-gray-300">
        <iframe
          src="/Claripath1.drawio.html"
          title="Draw.io Diagram"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
   
  )
}

export default Routetree
