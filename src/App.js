import React from "react";
import SearchBar from "./SearchBar.js";
import Axios from "axios";
import VideoList from "./VideoList.js";
import FeatureVideo from "./FeatureVideo.js";
import "./app.scss";
class App extends React.Component {
  constructor() {
    super();
    this.state = { videos: [], selectVideo:null };
  }


   componentDidMount(){
     this.onformSubmit("new game");
   }

  onformSubmit = (value) => {
    this.fetchData(value);
  };

  fetchData = async (value) => {
    const KEY = "AIzaSyD-yMTNh7_9VL0wy3NkqNyCZA2ImthpILs";

    const response = await Axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          q: value,
          videoType:"any",
          type:"video",
          key: KEY,
        },
      }
    );
    this.setState({ videos: response.data.items, selectVideo:response.data.items[0] });
  };

  
  onSelectVideo=(video)=>{
    this.setState({selectVideo:video})
  }


  render() {
    return (
      <div className="main-area">
          <SearchBar onSubmit={this.onformSubmit} />
          <FeatureVideo  video={this.state.selectVideo}/>
          <VideoList selectVideo={this.onSelectVideo} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
