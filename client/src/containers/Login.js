import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { states } from '../App'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

   /* acceptEmail = (text) => {
        this.setState({
            email: text
        })
    }

    acceptPassword = (text) => {
        this.setState({
            password: text
        })
    }

    loginCallback = (success) => {
        if (success) {
            this.props.authenticated()
        }
    }*/

    render() {
        const styles = reactCSS({
            default : {
            loginContainer: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'space-evenly',
                height: '100%'
            },
            usernameText: {
                color: 'white',
                alignSelf: 'flex-start',
                left: 5
            },
            passwordText: {
                color: 'white',
                alignSelf: 'flex-start',
                //left: 5
            }
            
        }
        })

        return (
            
                <div style={styles.loginContainer}>
                    <div style={styles.usernameText}> USERNAME </div>
                    <input />
                    <div style={styles.passwordText}> PASSWORD </div>
                    <input  />
                    <div onClick={() => this.props.setAppState(states.SONGS)}> LOGIN
                        
                     </div> 
                        
                </div>
        )
    }
}

/* login button styling

justifyContent="center"
                        textAlign="center"
                        color="white"
                        backgroundColor="#4f8ff7"
                        borderRadius={2}
                        width={350}
                        height={40} */