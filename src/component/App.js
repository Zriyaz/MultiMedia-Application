import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../Apis/youtube"

const KEY="AIzaSyCPskfzuQoxlt2O2Os5qV57JpgDA6nDvOo"
export default class App extends React.Component{

  
  onTermSubmit = async term=>{
   const response = await youtube.get("/search",{
    params:{
      q:term,
      part: "snippet",
      maxResults: 5,
      type: 'video',
      key: KEY
    }
  })
  }
  render(){
    return(
      <div className="ui container">
       <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    )
  }
}