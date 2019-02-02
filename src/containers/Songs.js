import React, { Component } from 'react'
import reactCSS from 'reactcss'
import Song from '../components/songs/Song'



export default class Songs extends Component {
  render() {

    const styles = reactCSS({
      default: {
        container: {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'black',
          color: 'blue',
          minHeight: '100vh',
          //width: '100%',
          justifyContent: 'space-evenly'
        },
        search: {
            height: '10%',
            fontSize: 20,
            width: 200
        },
        flatlist: {
            overFlow: 'auto'
        }
      }
    })

    
    return (
      <div style={styles.container}>
      <header>Songs</header>
      <input style={styles.search}type="text" placeholder="Song Search..."></input>
      <div style={styles.flatlist}>
          <Song />
      </div>
      </div>
    )
  }
}

