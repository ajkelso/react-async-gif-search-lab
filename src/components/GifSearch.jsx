import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        search: ""
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.search)
    }

    render(){
        return(
            <form id="search" onSubmit={this.handleSubmit}>
                <label htmlFor="search">Enter a Search Term:</label>
                <input onChange={this.handleChange} type="text" value={this.state.search}/>
                <input type="submit"/>
            </form>
        )
    }
}