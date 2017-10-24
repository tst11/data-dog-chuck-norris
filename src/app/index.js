import React from "react";
import { render } from "react-dom";
import { 
  BrowserRouter as Router, 
  Route } from 'react-router-dom'
import axios from 'axios';

import uuid from 'uuid/v4';

import Categories from './components/Categories.js';
import Search from './components/Search.js';
import Navbar from './components/Navbar.js';
import History from './components/History.js';
import Log from './components/Log.js';
import Home from './components/Home.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      singleSearchQuery: "",
      searchHistory: [],
      apiUrl: ""
    }
  }

  updateSearchHistory(val) {
    this.setState({
      searchHistory: this.state.searchHistory.concat(val)
    });
  }

  updateSingleQuery(val) {
    this.setState({
      singleSearchQuery: val
    });
  }

  updateApiUrl(val) {
    this.setState({
      apiUrl: val,
    });
  }

  dynamicClassNames() {
    
    let colorClasses = [
      'badge-primary',
      'badge-success',
      'badge-danger',
      'badge-warning',
      'badge-info',
      'badge-dark',
    ];

    let randomNum = Math.floor(Math.random() * (colorClasses.length-1 - 0 + 1));

    let fullClass = "badge " + colorClasses[randomNum];

    return fullClass;
  }

  componentDidMount() {
    let rct = this;
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(function (response) {
        rct.setState({ categories: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const SearchWithProps = () => (
      <Search 
        searchNames={this.updateSearchHistory.bind(this)}
        updateApiUrl={this.updateApiUrl.bind(this)}
        updateSingleQuery={this.updateSingleQuery.bind(this)}
      />
    )

    const CategoriesWithProps = () => (
      <Categories 
        categories={this.state.categories}
        dynamicClassNames={this.dynamicClassNames}
        updateSingleQuery={this.updateSingleQuery.bind(this)}
        updateApiUrl={this.updateApiUrl.bind(this)}
      />
    )

    const HistoryWithProps = () => (
      <History 
        history={this.state.searchHistory}
        dynamicClassNames={this.dynamicClassNames}
        updateSingleQuery={this.updateSingleQuery.bind(this)}
        updateApiUrl={this.updateApiUrl.bind(this)}
      />
    )

    const LogWithProps = () => (
      <Log 
        singleSearchQuery={this.state.singleSearchQuery}
        apiUrl={this.state.apiUrl}
      />
    )

    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={SearchWithProps}/>
          <Route path="/categories" component={CategoriesWithProps}/>
          <Route path="/history" component={HistoryWithProps}/>
          <Route path="/" component={LogWithProps}/>
        </div>
      </Router>
    );
  }
}

render(<App/>, window.document.getElementById("app"));