import React, { Component } from 'react';
import reactCSS from 'reactcss'
import { states } from '../../App'



export default class Song extends Component {
  render() {

    const styles = reactCSS({
      default: {
        container: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 50
        },
        
    }
    })
    return (
      <div style={styles.container}>
        <div onClick={() => this.props.setAppState(states.SONGS)}>Songs</div>
        <div onClick={() => this.props.setAppState(states.PLAYLIST)}>Playlists</div>
      </div>
    );
  }
}

