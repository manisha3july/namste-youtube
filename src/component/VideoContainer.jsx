import React, { useEffect, useState } from 'react';
import { YOU_TUBE_API } from './utils/contants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOU_TUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {videos.length > 0 ? (
        videos.map((video) => <Link to={'/watch?v='+ video.id}><VideoCard key={video.id} info={video} /></Link>)
      ) : (
        <p className="text-gray-500 text-center col-span-full">Loading videos...</p>
      )}
    </div>
  );
}

export default VideoContainer;
