import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import postImage from "../assets/logoimage.jpg";
import Comment from "../components/Comment";

function PostDetails() {
  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            10 uses of artificial Intelligence in day to day life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@Ashishdixit</p>
          <div className="flex space-x-2 text-sm">
            <p>21/04/24</p>
            <p>18:08</p>
          </div>
        </div>
        <img src={postImage} alt="" className="w-[400px] h-[300px] mx-auto mt-8" />
        <p className="mx-auto mt-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          molestias laboriosam pariatur quos soluta quisquam autem expedita
          aperiam nulla ut mollitia error nobis dolores debitis, reprehenderit
          molestiae odit voluptatibus voluptatum deleniti odio eaque consectetur
          a. Possimus ducimus, eum voluptas obcaecati veniam voluptatem, vel
          atque aliquid harum quidem ab quos eligendi!
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Ai</div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          
          <Comment/>
          <Comment/>
          
        </div>
        
        {/* Write a comment */}
        <div className="flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="write a comment" className="md:w-[90%] outline-none px-4 mt-4 md:mt-0"/>
            <button className="bg-black text-white px-4 py-2 md:w-[10%] mt-4 md:mt-0">Add Comment</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PostDetails;
