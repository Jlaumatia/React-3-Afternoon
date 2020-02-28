import React, { Component } from 'react'

export default class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        console.log('passed in props', this.props)
        return (
            <div className="bio"> 
                <span><h3 className="inlineH3">From: </h3>{this.props.passedInData[this.props.passedInIndex].city}, {this.props.passedInData[this.props.passedInIndex].country}</span><br/>
                <span><h3 className="inlineH3">Job Title: </h3>{this.props.passedInData[this.props.passedInIndex].title}</span><br/>
                <span><h3 className="inlineH3">Employer: </h3>{this.props.passedInData[this.props.passedInIndex].employer}</span><br/>
            </div>
        )
    }
}
