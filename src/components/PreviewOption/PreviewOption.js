import React, { Component } from 'react';
import './PreviewOption.css';

class PreviewOption extends Component {
    // Function to color the active preview-button
    getStyle = (e) => {
        const previewMode = this.props.previewMode;
        if(previewMode === e){
            return { backgroundColor: '#ffffff', boxShadow: '0 0 8px 0 rgba(0,0,0,.1)'}
        }
    }

    getRowStyle = () => {
        if(this.props.anmChosen === true){
            return {backgroundColor: 'rgba(255, 255, 255, 0.50)'}
        }
    }

    render() {
        return (
            <React.Fragment>
                <h3>Preview of <span>{this.props.curCat.toLowerCase()}</span> DOOH template</h3>
                <div className="previewBtnRow" style={this.getRowStyle()}>
                    <button style={this.getStyle('Portrait')} onClick={this.props.changeCanvas.bind(this, 'Portrait')}>Portrait (9:16)</button>
                    <button style={this.getStyle('Landscape')} onClick={this.props.changeCanvas.bind(this, 'Landscape')} >Landscape (16:9)</button>
                    <button style={this.getStyle('Squared')} onClick={this.props.changeCanvas.bind(this, 'Squared')}>Squared (1:1)</button>
                </div>
            </React.Fragment>
        )
    }
}

export default PreviewOption
