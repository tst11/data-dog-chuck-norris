import React from "react";
import { render } from "react-dom";
import uuid from 'uuid/v4';

class History extends React.Component {
  changeSearchData(val) {
    this.props.updateSingleQuery(val);
    this.props.updateApiUrl("https://api.chucknorris.io/jokes/search?query=");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.history.map((history) => 
          
            <div className="col-sm-2 text-center" style={{marginTop: 15 + 'px'}} key={uuid()}>
              
                  <span onClick={() => {this.changeSearchData(history)}} className={this.props.dynamicClassNames()} style={{fontSize: 1 + 'em', cursor: 'pointer'}}>{history}</span>
                
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="alert alert-success text-center" style={{marginTop: 30 +'px'}} role="alert">
              <strong>Click</strong> on a history badge to get quotes you saw!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;