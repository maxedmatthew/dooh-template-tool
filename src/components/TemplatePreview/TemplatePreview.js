import React, { Component } from 'react';
import './TemplatePreview.css';

class TemplatePreview extends Component {
    getStyle = (p) => {

        const returnObj = {
            display: this.props.isSelected.find(x => x.element === p).selected ? 'flex' : 'none',
        };

        //Animation that affects the styling
        const chosen = this.props.elementChosen;
        const animation = this.props.isSelected.find(x => x.element === p).animation;

        if (chosen === true && animation === 'Langzaam vergroten' && this.props.curCat === 'Product' && this.props.previewMode === 'Landscape'){
            returnObj.transform = 'scale(1.2) translateX(-25.5%)';
            returnObj.transition = 'ease-in 3s';
        } else if (chosen === true && animation === 'Langzaam vergroten' && this.props.curCat === 'Frame' && this.props.previewMode === 'Landscape'){
            returnObj.transform = 'scale(1.2) translateX(-27.5%)';
            returnObj.transition = 'ease-in 3s';
        } else if (chosen === true && animation === 'Langzaam vergroten'){
            returnObj.transform = 'scale(1.2)';
            returnObj.transition = 'ease-in 3s';
        }

        // If hover over the select-box of the element is active, add shadow and backgroundcolor to styling of element
        if (this.props.isSelected.find(x => x.element === p).mouseOn === true && p !== 'backgroundvideo' && p !== "background-image"){
            returnObj.boxShadow = 'rgb(52, 174, 135) 0px 0px 20px 0px';
            returnObj.background = '#34ae87';
        } else if ((this.props.isSelected.find(x => x.element === p).mouseOn === true && p === 'backgroundvideo') || (this.props.isSelected.find(x => x.element === p).mouseOn === true && p === 'background-image' )) {
            // returnObj.background = 'repeating-linear-gradient(45deg,#bcc6d9,#bcc6d9 20px,#ffffff 20px,#ffffff 40px)';
        } else {
            returnObj.boxShadow = 'none';
        }

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
        if (
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'main-title' && this.props.previewMode === 'Portrait') ||
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'main-title' && this.props.previewMode === 'Squared')
            ){
            returnObj.bottom = '22%';
        } else if (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'main-title' && this.props.previewMode === 'Landscape'){
            returnObj.top = '25%';
        } else if (
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Portrait') || 
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Squared')
            ){
            returnObj.bottom = '8%';
        } else if (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Landscape'){
            returnObj.bottom = '25.5%';
        }

        return returnObj;
    }

    animationStyle = (q) => {
        const returnStyle = {};

        if (this.props.isSelected.find(x => x.element === q).animation !== 'Geen animatie' && this.props.elementChosen === true){
            returnStyle.display = 'flex';
        } else {
            returnStyle.display = 'none';
        }
        return returnStyle;
    }

    posAnimation = (elementInput) => {

        const chosen = this.props.elementChosen;
        const animation = this.props.isSelected.find(x => x.element === elementInput).animation;

        // Code when animation is chosen

        //Attention animation
        if (chosen === true && animation === 'Attention animatie - Flash'){
            return `${elementInput} animated flash`;
        } else if (chosen === true && animation === 'Attention animatie - Shake'){
            return `${elementInput} animated shake`;
        } else if (chosen === true && animation === 'Attention animatie - Pulse'){
            return `${elementInput} animated pulse`;
        } else if (chosen === true && animation === 'Attention animatie - Tada'){
            return `${elementInput} animated tada`;
        } else if (chosen === true && animation === 'Attention animatie - Heartbeat'){
            return `${elementInput} animated heartBeat`;
        } else if (chosen === true && animation === 'Attention animatie - Flip'){
            return `${elementInput} animated flip`;
        }


        //Appear animation
        if (chosen === true && animation === 'Appear animatie - Bounce in'){
            return `${elementInput} animated bounceIn`;
        } else if (chosen === true && animation === 'Appear animatie - Bounce in down'){
            return `${elementInput} animated bounceInDown`;
        } else if (chosen === true && animation === 'Appear animatie - Bounce in left'){
            return `${elementInput} animated bounceInLeft`;
        } else if (chosen === true && animation === 'Appear animatie - Bounce in right'){
            return `${elementInput} animated bounceInRight`;
        } else if (chosen === true && animation === 'Appear animatie - Bounce in up'){
            return `${elementInput} animated bounceInUp`;
        } else if (chosen === true && animation === 'Appear animatie - Fade in'){
            return `${elementInput} animated fadeIn`;
        } else if (chosen === true && animation === 'Appear animatie - Fade in down'){
            return `${elementInput} animated fadeInDown`;
        } else if (chosen === true && animation === 'Appear animatie - Fade in left'){
            return `${elementInput} animated fadeInLeft`;
        } else if (chosen === true && animation === 'Appear animatie - Fade in right'){
            return `${elementInput} animated fadeInRight`;
        } else if (chosen === true && animation === 'Appear animatie - Fade in up'){
            return `${elementInput} animated fadeInUp`;
        } else if (chosen === true && animation === 'Appear animatie - Flip in X'){
            return `${elementInput} animated flipInX`;
        } else if (chosen === true && animation === 'Appear animatie - Flip in Y'){
            return `${elementInput} animated flipInY`;
        } else if (chosen === true && animation === 'Appear animatie - Slide in down'){
            return `${elementInput} animated slideInDown`;
        } else if (chosen === true && animation === 'Appear animatie - Slide in left'){
            return `${elementInput} animated slideInLeft`;
        } else if (chosen === true && animation === 'Appear animatie - Slide in right'){
            return `${elementInput} animated slideInRight`;
        } else if (chosen === true && animation === 'Appear animatie - Slide in up'){
            return `${elementInput} animated slideInUp`;
        } else if (chosen === true && animation === 'Appear animatie - Zoom in'){
            return `${elementInput} animated zoomIn`;
        } else if (chosen === true && animation === 'Appear animatie - Jack in the box'){
            return `${elementInput} animated jackInTheBox`;
        }

        return elementInput;
    }

    render() {
        const category = this.props.curCat;
        const previewMode = this.props.previewMode;

        return (
            <div className={`previewTemplate ${previewMode}Prv ${category}`} style={this.props.animationChosen && previewMode === 'Portrait' ? { width:'310px', height: '550px'} : { }}>
                <div className="innerElements">
                    <div className={this.posAnimation('logo')} style={this.getStyle('logo')}>
                        <span>Logo</span>
                        <img className="selected" style={this.animationStyle('logo')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('productimage')} style={this.getStyle('productimage')}>
                        <span>Product-image</span>
                        <img className="selected" style={this.animationStyle('productimage')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('productvideo')} style={this.getStyle('productvideo')}>
                        <span>Product-video</span>
                        <img className="selected" style={this.animationStyle('productvideo')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('main-title')} style={this.getStyle('main-title')}>
                        <span>Main title</span>
                        <img className="selected" style={this.animationStyle('main-title')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('subtitle')} style={this.getStyle('subtitle')}>
                        <span>Subtitle</span>
                        <img className="selected" style={this.animationStyle('subtitle')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div> 
                    <div className={this.posAnimation('backgroundvideo')} style={this.getStyle('backgroundvideo')}>
                        <span className="bg-vid-span">Background-video</span>
                        <img className="selected" style={this.animationStyle('backgroundvideo')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('background-image')} style={this.getStyle('background-image')}>
                        <span className="bg-vid-span">Background-image</span>
                        <img className="selected" style={this.animationStyle('background-image')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('pancake-element')}  style={this.getStyle('pancake-element')}>
                        <span>Pancake Element</span>
                        <img className="selected" style={this.animationStyle('pancake-element')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animated.png" alt="check"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default TemplatePreview
