import React, { Component } from 'react';
import AnimationComponent from './AnimationComponent';
import './AnimationSelection.css';

class AnimationSelection extends Component {

    loadElement = () => {
        this.props.curElements.map(elem => {
            if(elem.selected === true){
                return (<AnimationComponent />);
             }
             return elem;   
        })
    }

    render() {
        return (
            <div className="AnimationSelection">
                <h3>Choose your animation</h3>
                {this.props.curElements.map(elem => {
                    if(elem.selected === true){
                        return (<AnimationComponent key={elem.id} element={elem} possibleAnimation={elem.possibleAnimation} handleSubmit={this.props.handleSubmit} mouseOnElement={this.props.animationElementOnHover} mouseOffElement={this.props.animationElementOffHover} />);
                    }
                    return '';   
                })} 
                <p className="checkWarning"><img className="checkIcon" src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img> = Animation selected</p>              
               
            </div>
        )
    }
}

export default AnimationSelection
