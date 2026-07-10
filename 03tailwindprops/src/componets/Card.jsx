import React from 'react'

function Card({username="AP"}){
  return (
    <div>
        <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://pixlr.com/images/generator/simple-generator.webp"
          />
        </div>

        <div className="flex flex-col items-center mt-4">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>

          <div className="flex gap-2 text-sm text-gray-500">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card