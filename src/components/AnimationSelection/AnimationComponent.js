import React, { Component } from 'react'

class AnimationComponent extends Component {
    firstCaparalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    standardAnimation = () => {
        if (this.props.possibleAnimation.standardAnimation.length === 0){
            return;
        } else{
            let i = -1;
            return (
                <optgroup label="Standard Animation">
                    { 
                    this.props.possibleAnimation.standardAnimation.map(elem => {
                        i++ 
                        return <option value={this.props.possibleAnimation.standardAnimation[i]} key={i}> {this.props.possibleAnimation.standardAnimation[i]} </option>;
                    }) 
                    }
                </optgroup>
            )
        }
    }

    appearAnimation = () => {
        if (this.props.possibleAnimation.appearAnimation.length === 0){
            return;
        } else{
            let j = -1;
            return (
                <optgroup label="Appear Animation">
                    { 
                    this.props.possibleAnimation.appearAnimation.map(elem => {
                        j++ 
                        return <option value={this.props.possibleAnimation.appearAnimation[j]} key={j}> {this.props.possibleAnimation.appearAnimation[j]} </option>;
                    }) 
                    }
                </optgroup>
            )
        }
    }

    attentionAnimation = () => {
        if (this.props.possibleAnimation.attentionAnimation.length === 0){
            return;
        } else{
            let k = -1;
            return (
                <optgroup label="Attention Animation">
                    { 
                    this.props.possibleAnimation.attentionAnimation.map(elem => {
                        k++ 
                        return <option value={this.props.possibleAnimation.attentionAnimation[k]} key={k}> {this.props.possibleAnimation.attentionAnimation[k]} </option>;
                    }) 
                    }
                </optgroup>
            )
        }
    }

    render() {

        return (
            <p>
                <span>{this.firstCaparalize(this.props.element.element)}</span>
                <select name={this.props.element.element} className="selectFormAnimation" onChange={this.props.handleSubmit} defaultValue={this.props.element.animation} onMouseOver={this.props.mouseOnElement.bind(this, this.props.element.element)} onMouseOut={this.props.mouseOffElement.bind(this, this.props.element.element)} >
                    {this.standardAnimation()}
                    {this.appearAnimation()}
                    {this.attentionAnimation()}
                </select>
            </p>
        )
    }
}

export default AnimationComponent
