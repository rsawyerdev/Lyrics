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
    
      <div style={styles.list}>Song 1</div>

      <div>Artist 1</div>
      </div>
      </div>
    );
  }
}

