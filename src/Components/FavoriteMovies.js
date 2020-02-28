import React, { Component } from 'react'
import data from './data';

export default class FavoriteMovies extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="favoriteMovies">
                <h3>Favorite Movies</h3>
                <ol>
                    <li><span>{this.props.passedInData[this.props.passedInIndex].favoriteMovies[0]}</span></li>
                    <li><span>{this.props.passedInData[this.props.passedInIndex].favoriteMovies[1]}</span></li>
                    <li><span>{this.props.passedInData[this.props.passedInIndex].favoriteMovies[2]}</span></li>
                </ol>
            </div>
        )
    }
}
