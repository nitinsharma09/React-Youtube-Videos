import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
	const videoItems = props.videos.map((video)=>{
		return <VideoListItem 
		video={video} 
		key={video.etag} 
		onVideoSelect = {props.onVideoSelect}
		/>
	});

	return (
		<div className="list-class col-md-4 pull-right">
			<ul className="list-group">
				{videoItems}
			</ul>
		</div>
	);
}

export default VideoList;