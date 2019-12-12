import React, { Component } from 'react'

class Element extends Component {
    render() {
        return (
            <p>
                <input 
                    type="checkbox"
                    checked={this.props.isSelected}
                    id="logo"
                    onChange={this.props.changeElement.bind(this, 'logo')}
                ></input>
                <span>
                    Logo / Brandname
                </span>
            </p>
        )
    }
}

export default Element
