import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import './style/style.css';

import keys from './keys';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import registerServiceWorker from './registerServiceWorker';

const key = keys.API_KEY;

class App extends Component{
	constructor(props){
		super(props);

		this.state = {
			videos : [],
			selectedVideo : null
		};
		this.videoSearch = this.videoSearch.bind(this);
		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key : key , term : term} , (data) =>{
			this.setState({videos : data , selectedVideo: data[0]});
		});
	}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);
		return(
			<div className="container-fluid">
				<SearchBar onSearchTermChange = {videoSearch}/>
				<div className="row">
					<VideoDetails video = {this.state.selectedVideo} />
					<VideoList 
						onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
						videos = {this.state.videos} 
					/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
registerServiceWorker();
