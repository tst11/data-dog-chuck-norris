import React from "react";
import { render } from "react-dom";

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-12">
            <div className="alert alert-warning text-center" style={{marginTop: 30 +'px'}} role="alert">
              <strong>Search</strong> through Chuck Norris quotes, there are plenty of them!
            </div>
          </div>
          <div className="col-12">
            <div className="alert alert-info text-center" style={{marginTop: 30 +'px'}} role="alert">
              <strong>Pick</strong> your favourite category and see a random quote from that category!
            </div>
          </div>
          <div className="col-12">
            <div className="alert alert-success text-center" style={{marginTop: 30 +'px'}} role="alert">
              <strong>See</strong> the search history and click on it to load the wonderful quotes again!
            </div>
          </div>
          <div className="col-12">
            <div className="alert alert-danger text-center" style={{marginTop: 30 +'px'}} role="alert">
              <strong>5</strong> - this is how much quotes you will see at most, we smartly limit number of quotes!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;