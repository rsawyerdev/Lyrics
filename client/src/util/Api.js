import axios from 'axios'


class Api {

    constructor() {
        this.songs = []
        this.playlists = []
        this.users = []
    }

    getSongs = (callback) => {
        axios.get('/songs/')
            .then((response) => {
                if (response.data.error) {
                    callback(null, response.data.error)
                } else {
                    this.songs = response.data
                    callback(this.songs)
                }
            })
            .catch((error) => {
                callback(null, error)
            })
    }

    
    //TODO

    login = () => {
        
    }

    saveNewSong = () => {
        
    }

    saveEditSong = () => {

        
    }

    deleteSong = () => {
        
    }

    removeSongFromPlaylist = () => {

        
    }

    removeSongFromApp = () => {

        
    }

    getUsers = () => {
        
    }

    setPassword = () => {
        
    } 

    saveNewUser = () => {
        
    }

    saveEditUser = () => {
        
    }

    getPlaylists = () => {
        
    }

    deletePlaylist = () => {
        
    }

    saveNewPlaylist = () => {
        
    }

    saveEditPlaylist = () => {
        
    }

    

}

export default Api
