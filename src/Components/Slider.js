import React, { Component } from 'react'
import data from './data'
import Bio from './Bio'
import FavoriteMovies from './FavoriteMovies';

export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            active: 0
            
        };

        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }

    previous() {
        if(this.state.active === 0) {
            return 
        } else {
            this.setState({
                active: this.state.active - 1
            })
        }
    }

    

    next() {
        if(this.state.active === data.length - 1) {
            return 
        } else {
        this.setState({
                active: this.state.active + 1
            })
        }
    }
    
    render() {
        console.log(data)

        return (
            <div className="wrapper">
                <div className="container">
                    <div className="slide">
                        <h1 className="slideCount">{this.state.active+1}/{data.length}</h1>
                        <div className="slideContent">
                            <h1 className="name">{data[this.state.active].name.first + ' ' + data[this.state.active].name.last}</h1>
                            <Bio passedInData={data} passedInIndex={this.state.active} />
                            <FavoriteMovies passedInData={data} passedInIndex={this.state.active} />
                            
                        </div>
                    </div>
                    <div className="buttonWrapper">
                        <button onClick={this.previous}>Previous</button>
                            <div className='buttonHouse'>
                                <button className='blueButton'>Edit</button>
                                <button className='blueButton'>Delete</button>
                                <button className='blueButton'>New</button>

                            </div>
                        <button onClick={this.next}>next</button>
                        
                    </div>
                </div>
            </div>
            
        )
    }
}
