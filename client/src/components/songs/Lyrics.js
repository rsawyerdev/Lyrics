import React, { Component } from 'react';
import reactCSS from 'reactcss'
import { states } from '../../App'



export default class Song extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lyrics: "These are the lyrics again" 
        }
    }

    onChange = (event) => {
        console.log(event)
        this.setState({
            lyrics : event.target.value
        })
        
    }
    

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
        lyrics: {
            fontSize: 22
        }
      }
    })
    return (
      <div style={styles.container}>
      <input style={styles.lyrics}
      type="text"
      value={this.state.lyrics}
      onChange={this.onChange}>
      
      </input>
      
      </div>
    );
  }
}

