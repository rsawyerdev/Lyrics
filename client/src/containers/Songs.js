import React, { Component } from 'react'
import reactCSS from 'reactcss'
import Song from '../components/songs/Song'
import { states } from '../App'


export default class Songs extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      songs : []
    }
  }

  componentDidMount = () => {
    this.getSongs()
}

getSongsCallback = (songs) => {
  this.setState({
    songs : songs
  })
}

getSongs = () => {
    this.props.api.getSongs(this.getSongsCallback)
}
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
          {this.state.songs && this.state.songs.map(song => {
            return(<Song song = {song}/>)

          })}
          {// map loops over each element in the array executing 
          }
      </div>
      </div>
    )
  }
}
