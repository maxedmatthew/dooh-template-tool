import React, { Component } from 'react';
// import Element from './Element/Element';
import './ElementSelection.css';

class ElementSelection extends Component {
    render() {
        return (
            <div className="ElementSelection">
                <h3>Choose your DOOH elements</h3>
                <div className="selectionWrap">
                    {/* <Element checked={this.props.isSelected[0].selected} changeElement={this.props.changeElement} /> */}
                    <p><input type="checkbox" checked={this.props.isSelected[0].selected} id="logo" onChange={this.props.changeElement.bind(this, 'logo')}></input> <span onClick={this.props.changeElement.bind(this, 'logo')}>Logo / Brandname</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[5].selected} id="productvideo" onChange={this.props.changeElement.bind(this, 'productvideo')}></input> <span onClick={this.props.changeElement.bind(this, 'productvideo')}>Productvideo</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[1].selected} id="main-title" onChange={this.props.changeElement.bind(this, 'main-title')}></input> <span onClick={this.props.changeElement.bind(this, 'main-title')}>Main title</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[3].selected} id="productimage" onChange={this.props.changeElement.bind(this, 'productimage')}></input> <span onClick={this.props.changeElement.bind(this, 'productimage')}>Productimage</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[2].selected} id="subtitle" onChange={this.props.changeElement.bind(this, 'subtitle')}></input> <span onClick={this.props.changeElement.bind(this, 'subtitle')}>Subtitle</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[4].selected} id="backgroundvideo" onChange={this.props.changeElement.bind(this, 'backgroundvideo')}></input> <span onClick={this.props.changeElement.bind(this, 'backgroundvideo')}>Background video</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[6].selected} id="pancake-element" onChange={this.props.changeElement.bind(this, 'pancake-element')}></input> <span onClick={this.props.changeElement.bind(this, 'pancake-element')}>Pancake element</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[7].selected} id="background-image" onChange={this.props.changeElement.bind(this, 'background-image')}></input> <span onClick={this.props.changeElement.bind(this, 'background-image')}>Background image</span></p>
                </div>
            </div>
        )
    }
}

export default ElementSelection
