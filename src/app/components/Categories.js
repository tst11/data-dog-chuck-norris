import React from "react";
import { render } from "react-dom";
import uuid from 'uuid/v4';

class Categories extends React.Component {

  changeSearchData(val) {
    this.props.updateSingleQuery(val);
    this.props.updateApiUrl("https://api.chucknorris.io/jokes/random?category=");
  }

  render() {
    return (
      <div className="container"> 
        <div className="row">
          {this.props.categories.map((category) => 
          
            <div  className="col-sm-2 text-center" style={{marginTop: 15 + 'px'}} key={uuid()}>
              
                  <span onClick={() => {this.changeSearchData(category)}} className={this.props.dynamicClassNames()} style={{fontSize: 1 + 'em', cursor: 'pointer'}}>{category}</span>
                
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="alert alert-primary text-center" style={{marginTop: 30 +'px'}} role="alert">
              <strong>Click</strong> on a category to get quotes!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;