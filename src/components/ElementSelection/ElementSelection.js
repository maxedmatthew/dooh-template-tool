import React, { Component } from 'react';
// import Element from './Element/Element';
import './ElementSelection.css';

class ElementSelection extends Component {
    render() {
        return (
            <div className="ElementSelection">
                <h3>Choose your DOOH elements</h3>
                <div className="selectionWrap">
                    <p><input type="checkbox" checked={this.props.isSelected[0].selected} id="logo" onChange={this.props.changeElement.bind(this, 'logo')}></input> <span onClick={this.props.changeElement.bind(this, 'logo')}>Logo / Brandname</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[5].selected} id="product_video" onChange={this.props.changeElement.bind(this, 'product_video')}></input> <span onClick={this.props.changeElement.bind(this, 'product_video')}>Product-video</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[1].selected} id="title" onChange={this.props.changeElement.bind(this, 'title')}></input> <span onClick={this.props.changeElement.bind(this, 'title')}>Main title</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[3].selected} id="product_image" onChange={this.props.changeElement.bind(this, 'product_image')}></input> <span onClick={this.props.changeElement.bind(this, 'product_image')}>Product-image</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[2].selected} id="subtitle" onChange={this.props.changeElement.bind(this, 'subtitle')}></input> <span onClick={this.props.changeElement.bind(this, 'subtitle')}>Subtitle</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[4].selected} id="video_bg" onChange={this.props.changeElement.bind(this, 'video_bg')}></input> <span onClick={this.props.changeElement.bind(this, 'video_bg')}>Background-video</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[6].selected} id="pancake" onChange={this.props.changeElement.bind(this, 'pancake')}></input> <span onClick={this.props.changeElement.bind(this, 'pancake')}>Pancake element</span></p>
                    <p><input type="checkbox" checked={this.props.isSelected[7].selected} id="image_bg" onChange={this.props.changeElement.bind(this, 'image_bg')}></input> <span onClick={this.props.changeElement.bind(this, 'image_bg')}>Background-image</span></p>
                </div>
            </div>
        )
    }
}

export default ElementSelection
