import React from 'react';
import {
  HomeIcon,
  FireIcon,
  PlayIcon,
  NewspaperIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';






function Sidebar() {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  console.log(isMenuOpen)

  if (!isMenuOpen) return null;
  return (
    <aside className="w-24 h-screen fixed top-18 left-0 bg-white border-r shadow-sm flex flex-col items-center pt-4">

      <Link to="/">  <HomeIcon className="w-6 h-6" /> <h3>Home</h3></Link>
      <div className="border-t w-full my-2" />
      <FireIcon className="w-6 h-6" /> <h3>Shorts</h3>
      <div className="border-t w-full my-2" />
      <FireIcon className="w-6 h-6" />  <h3>Live</h3>
      <div className="border-t w-full my-2" />
      <PlayIcon className="w-6 h-6" />

      <h3>Subscriptions</h3>
      <ul>
        <li>Music</li>
        <li>News</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

    </aside>
  );
}

export default Sidebar;
