import React, { Component, Button } from 'react';
import reactCSS from 'reactcss'
import logo from './logo.svg';
import Songs from './containers/Songs'

export const states = {
  SONGS: 'Songs'
}

 class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    currentState: states.SONGS
  }
}

  render() {

    const styles = reactCSS({
      default: {
        container: {
          display: 'flex',
          backgroundColor: 'black',
          color: 'blue',
          //minHeight: '100vh',
          //width: '100%',
          justifyContent: 'center'
        },
        header: {
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          justifyContent: 'space-between',
        }
      }
    })

    let container
    switch(this.state.currentState){
      case states.SONGS :
       container = <Songs />
    }

    return (
      <div style={styles.container}>
      {/*<header style={styles.header}>
        <button>Songs</button>
        <button>Playlists</button>
    </header>*/}
      {container}
      </div>
    );
  }
}

export default App;
