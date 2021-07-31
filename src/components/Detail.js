import React, { Component } from 'react'

export class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props
        
        if(location.state === undefined) {
            history.push('/')
        }
    }
    render() {
        const { location } = this.props
        console.log(location)
        if (location.state) {
            return (
                <div>
                    {location.state.title}
                </div>
            )
        } 
        return null
    }
}

export default Detail
