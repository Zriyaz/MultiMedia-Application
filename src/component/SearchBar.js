
import React from "react"
import VideoStyle from "./VideoStyle"
export default class SearchBar extends React.Component{
  state={term:''}

  onInputChange=(event)=>{
    this.setState({term:event.target.value})
  }

  onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }

  render(){
    return(
      <div>
      <VideoStyle/>
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="form">
           <input type="text"
           value={this.state.term}
            placeholder="Search..."
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
      </div>
    )
  }
}