import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProfilePost from '../components/ProfilePost'

function Profile() {
    return (
        <div>
            <Navbar />
            <div className='min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start'>
                <div className='flex flex-col md:w-[70%] w-full mt-8 md:mt-0'>
                    <h1 className='font-bold text-xl mb-4'>Your Post:</h1>
                    <ProfilePost />
                    <ProfilePost />
                    <ProfilePost />
                    <ProfilePost />
                    <ProfilePost />
                </div>

                <div className='md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end '>
                    <div className='flex flex-col space-y-4 items-start'>
                    <h1 className="text-xl font-bold mb-4">Profile</h1>
                    <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your username" type="text" />
                    <input className="outline-none px-4 py-2 text-gray-500" placeholder="Your email" type="email" />
                    <div className="flex items-center space-x-4 mt-8">
                        <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Update</button>
                        <button className="text-white font-semibold bg-black px-4 py-2 hover:text-black hover:bg-gray-400">Delete</button>
                    </div>
                    </div>
                    
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Profile