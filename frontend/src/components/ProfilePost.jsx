import React from 'react'
import logoImage from '../assets/logoimage.jpg'

function ProfilePost() {
  return (
    <div className="flex w-full mt-8 space-x-4">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img className = "h-full w-full object-cover" src= {logoImage} alt=""/>
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mt-2 mb-1 md:text-2xl">
          10 uses of artificial Intelligence in day to day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@Ashishdixit</p>
          <div className="flex space-x-2 text-sm">
            <p>21/04/24</p>
            <p>18:08</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eum
          praesentium error corporis culpa porro id deleniti sapiente minima
          magnam modi voluptates qui vero iure, maxime ad incidunt sequi ex.
        </p>
      </div>
    </div>
  )
}

export default ProfilePost