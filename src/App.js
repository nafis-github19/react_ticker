import React, {Component} from 'react';

class Ticker extends Component{
  constructor(){
    super();

      this.state ={
        count: 100,
      }

  }

  //methods for Ticker
  componentDidMount(){
    setInterval(() =>{
      this.setState({
        count: this.state.count -1,
      })
    },1000)
  }



  render(){

    return(
      <div className="full-body">
        <div className="ticker-count"> The ticker is: <span id="count">{this.state.count}</span></div>

        <button onClick={() => this.setState({count: 100})} type="button">Clear Count</button>

      </div>
    );
  };
};

export default Ticker;
