import React, { Component } from 'react';
import './App.css';
import Popup from './Popup.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            hover : false
        }

    }
    mouseOver(e){
        this.setState({
            hover : true
        })
    }
    mouseOut(e){
        this.setState({
            hover: false
        })
    }
  render() {
        console.log(this.state.hover)
    return (
      <div className="App">
       <div
           className="hover-icon"
           onMouseOver={this.mouseOver.bind(this)}
           onMouseOut={this.mouseOut.bind(this)}
       >
           Hover here!
       </div>
          {this.state.hover? <Popup /> : ''}
      </div>
    );
  }
}

export default App;
