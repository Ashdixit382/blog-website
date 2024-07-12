import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ImCross } from 'react-icons/im'

function Createpost() {

    const [cat, setcat] = useState("");
    const [cats, setcats] = useState([]);

    const deleteCategory = (i) => {
        const updatecats = [...cats];
        const updatearray = updatecats.filter((c,index) => {
            return (index != i);
        })
        setcats(updatearray);
    }

    const addCatergory = () => {
        const updatecats = [...cats];
        updatecats.push(cat);
        setcat("");
        setcats(updatecats);
    }
    
    return (
        <div>
            <Navbar />
            <div className='px-6 md:px-[200px] mt-8'>
                <h1 className='font-bold md:text-2xl text-xl'>Create a Post</h1>
                <form className='w-full flex flex-col md:space-y-8 space-y-4 mt-4'>
                    <input type="text" placeholder='Enter Post title' className='py-2 px-4 outline-none' />
                    <input type="file" className='px-4' />
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            <input value={cat} onChange={(e) => setcat(e.target.value)} className='px-4 py-2 outline-none' placeholder='Enter post category' type="text" />
                            <div onClick={addCatergory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
                        </div>

                        <div className='flex mt-3 px-4'>

                            {cats?.map((c, i) => (
                                <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                                    <p>{c}</p>
                                    <p onClick = {() => deleteCategory(i)}  className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <textarea rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description' />
                    <button className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
                </form>

            </div>
            <Footer />
        </div>
    )
}

export default Createpost