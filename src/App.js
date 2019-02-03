import React, { Component, Button } from 'react';
import reactCSS from 'reactcss'
import logo from './logo.svg';
import Songs from './containers/Songs'
import Lyrics from './components/songs/Lyrics'
import Header from './components/global/Header'
import Playlist from './containers/Playlist'
import Login from './containers/Login'

export const states = {
  LOGIN: 'Login',
  SONGS: 'Songs',
  LYRICS: 'Lyrics',
  PLAYLIST: 'Playlist'
}

 class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    currentState: states.SONGS
  }
}

setAppState = (newPage) => {
  console.log(newPage)
  this.setState({
      currentState: newPage
  },()=> {
    console.log(this.state.currentState)
  })
}

  render() {

    const styles = reactCSS({
      default: {
        container: {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'black',
          color: 'blue',
          height: '100%',
          //width: '100%',
          justifyContent: 'space-evenly'
        }
      }
    })

    let container
    switch(this.state.currentState){
      /*case states.LOGIN :
      container = <Login setAppState={this.setAppState}/>
      break*/
      case states.SONGS :
       container = <Songs setAppState={this.setAppState}/>
       break
       case states.LYRICS :
        container = <Lyrics />
        break
        case states.PLAYLIST : 
        container = <Playlist />
        break
    } 
      
    return (
      <div style={styles.container}>
      <Header setAppState={this.setAppState}/>
      {container}
      </div>
    );
  }
}

export default App;
