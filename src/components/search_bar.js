import React , {Component} from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state = { term : ''}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(term){
		this.setState({term : term});
		this.props.onSearchTermChange(term);
	}

	render(){
		return(
			<div className="search-bar">
				<input 
				onChange = {(event)=>{this.handleChange(event.target.value)}}
				placeholder = "Search Video"
				/>
				<br/>
			</div>
		);
	}
}

export default SearchBar;