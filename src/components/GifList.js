import React, { Component} from 'react';


export default class GifList extends Component {


    renderGifs = () => {
        console.log(this.props);
        return this.props.gifs.map(gif => <li key={gif.id}> <img src={gif.images.original.url} alt={gif.title}></img></li> )
    }

    render(){
        return(
            <ul>
                {this.renderGifs()}
            </ul>
        
            
        )
    }
}