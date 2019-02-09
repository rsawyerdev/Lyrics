import React, { Component } from 'react'
import reactCSS from 'reactcss'




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
        
      }
    })

    
    return (
      <div style={styles.container}>

      PLAYLIST PAGE
      </div>
    )
  }
}

