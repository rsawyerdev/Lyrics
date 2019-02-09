import React, { Component } from 'react'
import reactCSS from 'reactcss'
import Song from '../components/songs/Song'
import { states } from '../App'



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
          width: '100%',
          justifyContent: 'space-evenly'
        },
        search: {
            height: '10%',
            fontSize: 20,
            width: 200,
            alignSelf: 'center',
            borderRadius: 3
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            justifyContent: 'space-evenly',
        },
        flatlist: {
          display: 'flex',
          width: '100%',
          justifyContent: 'center'
        }
      }
    })

    
    return (
      <div style={styles.container}>

      <input style={styles.search}type="text" placeholder="Song Search..."></input>
      <div style={styles.header}>
      <div>Song</div>
      <div>Artist</div>
      </div>
      <div style={styles.flatlist} onClick={() => this.props.setAppState(states.LYRICS)}>
          <Song />
      </div>
      </div>
    )
  }
}

