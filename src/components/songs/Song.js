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
          minHeight: '80vh',
          width: '90%',
          //justifyContent: 'flex-start',
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            fontSize: '28',
            borderStyle: 'groove',
            //groove, ridge
            boderWidth: 2,
            borderColor: 'yellow'
        },
        list: {
            //alignSelf: 'flex-end  '
        }
      }
    })
    return (
      <div style={styles.container}>
      <div style={styles.header}>
    
      <div style={styles.list}>Jeff Buckley</div>

      <div>Grace</div>
      </div>
      </div>
    );
  }
}

