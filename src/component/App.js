import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../Apis/youtube"

const KEY="AIzaSyBPFHYUYJEyX0otOjP0yL2Kx60LCcD-kk4"
export default class App extends React.Component{
  
  state={videos:[]}

  onTermSubmit = async term=>{
    console.log(term)
    const response = await youtube.get("/search",{
      params:{
        q:term,
      part: 'snippet',
      maxResults: 50,
      type: 'video',
      key: KEY
    }
    })
    this.setState({videos:response.data.items})

  }
  render(){
    return(
      <div className="ui container">
      <SearchBar onFormSubmit={this.onFormSubmit}/>
      I have {this.state.videos.length} videso.
      </div>
    )
  }
}