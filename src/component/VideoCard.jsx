function VideoCard({ info }) {
  if (!info || !info.snippet || !info.statistics) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={thumbnails?.high?.url}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-md font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600">{channelTitle}</p>
        <span className="text-sm text-gray-500">{parseInt(statistics.viewCount).toLocaleString()} views</span>
      </div>
    </div>
  );
}

export default VideoCard;
