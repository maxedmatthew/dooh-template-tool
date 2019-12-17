import React, { Component } from 'react'

class AnimationComponent extends Component {
    render() {
        let i = -1;

        return (
            <p>
                <span>{this.props.element.element}</span>
                <select name={this.props.element.element} className="selectFormAnimation" onChange={this.props.handleSubmit} defaultValue={this.props.element.animation}>
                    { 
                    this.props.possibleAnimation.map(elem => {
                        i++
                        return <option value={this.props.possibleAnimation[i]} key={i}> {this.props.possibleAnimation[i]} </option>;
                    }) 
                    }
                </select>
            </p>
        )
    }
}

export default AnimationComponent
