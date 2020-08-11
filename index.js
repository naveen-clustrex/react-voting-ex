import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {useDispatch} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate : [
        {name : "DMK" , vote : 0},
        {name : "ADMK" , vote : 0},
        {name : "NTK" , vote : 0},
        {name : "MNM" , vote : 0},
        {name : "AISMK" , vote : 0},
      ],
      showresult : false
    };
  }

  vote = (i) => {
    let voterCount = [...this.state.candidate]
    voterCount[i].vote++;
    this.setState({candidate : voterCount});
  }

  render() {
    return (
     <div className = "voter-page"> 
     <h1 className = {'Res'}> Vote Your Party</h1>
      <div>
          {
            this.state.candidate.map((candi , i) => 
              <div key = {i}>
               <div className = "red">{ candi.name }</div>
               <br/>
              <button className = {'Vote'} onClick={this.vote.bind(this, i)}>Vote</button>
              <br/>
              <br/>
              </div>
            )
          }
      </div>
      <br/>
       <button className = {'Res'} onClick = { () => { this.setState({ showresult : true})}}> See the Result </button>
       <br/>
       <br/>
       {
         this.state.showresult ? 
        <div>
          {
            this.state.candidate.map((candi , i) => 
              <div key = {i}>
               <div>{ candi.name } : { candi.vote }</div>
               <br/>
              </div>
            )
          }
        </div> :null
       }
     </div> 
    );
  }
}

render(<App />, document.getElementById('root'));
