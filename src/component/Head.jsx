import React from 'react';
import MenuImg from '../assets/hamburger.png';
import LogoImg from '../assets/youtube.png';
import UserImg from '../assets/profile-user.png';
import { toggelMenu } from './utils/appSlice';
import { useDispatch } from 'react-redux';

function Head() {

  const dispatch = useDispatch()

  const toggelMenuHandler = () =>{
    dispatch(toggelMenu())
  }
   
  return (
    <header className="grid grid-cols-12 items-center shadow p-2 px-4 bg-white sticky top-0 z-50">
      {/* Left Section */}
      <div className="col-span-2 flex items-center gap-4">
        <img  onClick={toggelMenuHandler} src={MenuImg} alt="Menu" className="w-6 cursor-pointer" />
        <img src={LogoImg} alt="YouTube Logo" className="w-8" />
      </div>

      {/* Center Search Bar */}
      <div className="col-span-8 flex items-center justify-center">
        <div className="flex w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
          />
          <button className="bg-gray-100 border border-gray-300 border-l-0 px-4 py-2 rounded-r-full hover:bg-gray-200">
            🔍
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-2 flex justify-end items-center">
        <img src={UserImg} alt="User Profile" className="w-8 h-8 rounded-full cursor-pointer" />
      </div>
    </header>
  );
}

export default Head;
