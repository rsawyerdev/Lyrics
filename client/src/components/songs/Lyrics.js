import React, { Component } from 'react';
import reactCSS from 'reactcss'
import { states } from '../../App'



export default class Song extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lyrics: "These are the lyrics, These are the lyrics, These are the lyrics, These are the lyrics, These are the lyrics, These are the lyrics, These are the lyrics, These are the lyrics ,These are the lyrics, These are the lyrics, These are the lyrics" 
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

          alignItems:'center',  
          minHeight: '100vh',
          
          justifyContent: 'center',
        },
        lyrics: {
            fontSize: 40,
            color: '#66ff33',
            backgroundColor: 'grey',
            width: '80%',
            height: '80vh',
            textAlign: 'center'
        }
      }
    })
    return (
      <div style={styles.container}>
      <textarea style={styles.lyrics}
      wrap="hard"
      value={this.state.lyrics}
      onChange={this.onChange}
      >
      
      </textarea>
      
      </div>
    );
  }
}
