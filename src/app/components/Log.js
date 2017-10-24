import React from "react";
import { render } from "react-dom";
import axios from 'axios';
import uuid from 'uuid/v4'

class Log extends React.Component {
  constructor() {
    super();

    this.state = {
      visibleQuotes: []
    }
  }

  componentDidMount() {
    if(this.props.apiUrl !== "") {
      console.log("Yes!");
      let rct = this;
      let arr = []
      axios.get(this.props.apiUrl + this.props.singleSearchQuery)
      .then(function (response) {
        
        console.log(response);
        if(response.data.hasOwnProperty('result')) {
          if(response.data.total > 5) {
            for(var i = 0; i < 5; i++) {
              arr.push(response.data.result[i].value);
              
            }
          } else if (response.data.total <= 5 && response.data.total > 0) {
            for(var i = 0; i < response.data.result.length; i++) {
              arr.push(response.data.result[i].value);
              
            }
          }
          else {
            alert("No results matching " + rct.props.singleSearchQuery + " Found!");
          }
          
        } else {
          arr.push(response.data.value);
        }
        
        rct.setState({
          visibleQuotes: arr
        });

      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
  }

  render() {
    
    return (
      
      <div className="container">
        
        <div className="row">
          
        {this.state.visibleQuotes.map((quote) => 
          <div className="col-12" style={{marginTop: 20 +'px'}} key={uuid()}>
            <div className="card">
              <div className="card-body">
                {quote}
              </div>
            </div>
          </div>
          )}
          </div>
      </div>
    );
  }
}

export default Log;