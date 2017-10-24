import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import uuid from 'uuid/v4'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      searchHistory: [],
      visibleQuotes: [],
      _isMounted: null
    }
  }

  componentDidMount() {
    this.setState({
      visibleQuotes: this.state.visibleQuotes
    });
  }

  componentWillUnmount() {
    this.state._isMounted = false;
  }

  searchQuotes() {
    
    this.props.searchNames(this.state.searchQuery);
    this.props.updateApiUrl("https://api.chucknorris.io/jokes/search?query=");
    this.props.updateSingleQuery(this.state.searchQuery);
      
  }

  onHandleChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
    
  }

  _handleKeyPress = (e) => {
    if(e.charCode==13){
      this.searchQuotes();    
    }
  }

  render() {
    console.log("In app" + this.state.visibleQuotes);
    return (
      
      <div className="container">
        <div className="row d-flex justify-content-center" style={{marginTop: 30 + 'px'}}>
          
              <input type="text" 
              placeholder="Search" 
              onChange={(event) => 
                this.onHandleChange(event)
              }
              onKeyPress={this._handleKeyPress}/>
              <button 
              onClick={this.searchQuotes.bind(this)}
              className="btn btn-success">Search</button>
            
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Search;