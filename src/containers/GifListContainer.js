import React, { Component} from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
    
    state = {
        gifs: []
    }

    addGifsToState = (gifs) => {
        this.setState({gifs: gifs.data.slice(0,5)})
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=irish&api_key=W4jcoXmcA4rPMH09Q5vsBRWVO46IjXRe&rating=g')
        .then(res => res.json())
        .then(this.addGifsToState)
    }

    handleSearch = (input) => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=W4jcoXmcA4rPMH09Q5vsBRWVO46IjXRe&rating=g'
        fetch(url)
        .then(res => res.json())
        .then(this.addGifsToState)
    }

    render() {
        return(
            <div className="container">
                
                <GifSearch className="col" handleSearch={this.handleSearch}/>
                <GifList className="col" gifs={this.state.gifs} />
                
            </div>
        )
    }


}