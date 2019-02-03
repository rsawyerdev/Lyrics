import React, { Component } from 'react';
import reactCSS from 'reactcss'
import { states } from '../../App'



export default class Song extends Component {
  render() {

    const styles = reactCSS({
      default: {
        container: {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'grey',
          color: '#66ff33',
          minHeight: '100vh',
          width: 600,
          //justifyContent: 'flex-start',
        }
      }
    })
    return (
      <div style={styles.container}>
      this is the lyrics to a song
      </div>
    );
  }
}

