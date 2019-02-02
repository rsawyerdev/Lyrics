import React, { Component } from 'react';
import reactCSS from 'reactcss'



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
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: 'red',
            fontSize: '28'
        },
        list: {
            //alignSelf: 'flex-end  '
        }
      }
    })
    return (
      <div style={styles.container}>
      <div style={styles.header}>
      <header>Artist</header>
      <h1 style={styles.list}>Artist 1</h1>
      <header>Songs</header>
      <h1>Song 1</h1>
      </div>
      </div>
    );
  }
}

