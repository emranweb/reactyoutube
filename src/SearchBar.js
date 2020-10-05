import React from 'react'

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state={value:""}
    }


    onInputChange=(e)=>{
        this.setState({value:e.target.value})
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.value)
    }


    render(){
        return (
            <div className="form-wrapper">
              <form onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                      <label htmlFor="search"></label>
                      <input 
                      type="text" 
                      id="search" 
                      placeholder="video searach" 
                      className="form-control" 
                      value={this.state.value}
                      onChange={this.onInputChange}
                      />
                  </div>
              </form>
            </div>
        )
    }
}


export default SearchBar;