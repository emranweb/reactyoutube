import Axios from 'axios';
import React from 'react';
import SearchBar from "./SearchBar.js";

class App extends React.Component {
  constructor(){
    super()
  }



  onformSubmit = (value)=>{
   console.log(value)
  }

  fetchData=()=>{
    Axios.get(){
      
    }
  }


  render(){
    return (
      <div>
        <SearchBar  onSubmit={this.onformSubmit}/>
      </div>
    )
  }
}

export default App;
