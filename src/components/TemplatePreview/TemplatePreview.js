import React, { Component } from 'react';
import './TemplatePreview.css';

class TemplatePreview extends Component {
    getStyle = (p) => {

        const returnObj = {
            display: this.props.isSelected.find(x => x.element === p).selected ? 'flex' : 'none',
        };

        // If no subtitle at category Message, change position of lowest element
        if (this.props.curCat === 'Message' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Portrait'){
            returnObj.bottom = '5%';
        } else if (
            (this.props.curCat === 'Message' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'main-title' && this.props.previewMode === 'Landscape') ||
            (this.props.curCat === 'Message' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'main-title' && this.props.previewMode === 'Squared')
            ){
            returnObj.bottom = '5%';
        }

        // If no subtitle at Frame category, change position of maintitle / logo
        if (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'main-title'){
            returnObj.transform = 'translateY(35%)';
        } else if (
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Portrait') || 
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Landscape')
            ){
            returnObj.transform = 'translateY(-60%)';
        } else if (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Squared'){
            returnObj.transform = 'translateY(-30%)';
        }

        return returnObj;
    }

    render() {
        const category = this.props.curCat;
        const previewMode = this.props.previewMode;

        return (
            <div className={`previewTemplate ${previewMode}Prv ${category}`}>
                <div className="innerElements">
                    <div className="logo" style={this.getStyle('logo')}>
                        <span>Logo</span>
                    </div>
                    <div className="productAfbeelding" style={this.getStyle('productimage')}>
                        <span>Product-image</span>
                    </div>
                    <div className="productVideo" style={this.getStyle('productvideo')}>
                        <span>Product-video</span>
                    </div>
                    <div className="hoofdTitel" style={this.getStyle('main-title')}>
                        <span>Main title</span>
                    </div>
                    <div className="subTitel" style={this.getStyle('subtitle')}>
                        <span>Subtitle</span>
                    </div> 
                    <div className="backgroundVideo" style={this.getStyle('backgroundvideo')}>
                        <span className="bg-vid-span">Background-video</span>
                    </div>
                    <div className="backgroundImage" style={this.getStyle('background-image')}>
                        <span className="bg-vid-span">Background-image</span>
                    </div>
                    <div className="pancakeElement" style={this.getStyle('pancake-element')}>
                        <span>Pancake Element</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default TemplatePreview
