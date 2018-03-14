import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './styles/main.css';

class Search extends Component {
	constructor(){
		super();

		this.state = {
			query : ''
		};
    }

    
    search(){
        if(this.state.query)
        this.props.history.push(`/search/${this.state.query}`)
    }

    keepInput = (e) => this.setState({query: e.target.value})
    
    
	render(){
		return (
			<form className="form-inline my-2 my-lg-0" onSubmit={e => {e.preventDefault(); this.Search() }}>
				<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.keepInput} value={this.state.query} />
			</form>
		);
	}
}

const SearchWithRouter = withRouter(Search);

export default SearchWithRouter;


