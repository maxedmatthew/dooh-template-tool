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
        if (this.props.isSelected.find(x => x.element === p).mouseOn === true && p !== 'video_bg' && p !== "image_bg"){
            returnObj.boxShadow = 'rgb(52, 174, 135) 0px 0px 20px 0px';
            returnObj.background = '#34ae87';
        } else if ((this.props.isSelected.find(x => x.element === p).mouseOn === true && p === 'video_bg') || (this.props.isSelected.find(x => x.element === p).mouseOn === true && p === 'image_bg' )) {
            // returnObj.background = 'repeating-linear-gradient(45deg,#bcc6d9,#bcc6d9 20px,#ffffff 20px,#ffffff 40px)';
        } else {
            returnObj.boxShadow = 'none';
        }

        // If no subtitle at category Message, change position of lowest element
        if (this.props.curCat === 'Message' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'logo' && this.props.previewMode === 'Portrait'){
            returnObj.bottom = '5%';
        } else if (
            (this.props.curCat === 'Message' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'title' && this.props.previewMode === 'Landscape') ||
            (this.props.curCat === 'Message' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'title' && this.props.previewMode === 'Squared')
            ){
            returnObj.bottom = '5%';
        }

        // If no subtitle at Frame category, change position of maintitle / logo
        if (
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'title' && this.props.previewMode === 'Portrait') ||
            (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'title' && this.props.previewMode === 'Squared')
            ){
            returnObj.bottom = '22%';
        } else if (this.props.curCat === 'Frame' && !this.props.isSelected.find(x => x.element === 'subtitle').selected && p === 'title' && this.props.previewMode === 'Landscape'){
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
        if (chosen === true && animation === 'Flash'){
            return `${elementInput} animated flash`;
        } else if (chosen === true && animation === 'Shake'){
            return `${elementInput} animated shake`;
        } else if (chosen === true && animation === 'Pulse'){
            return `${elementInput} animated pulse`;
        } else if (chosen === true && animation === 'Tada'){
            return `${elementInput} animated tada`;
        } else if (chosen === true && animation === 'Heartbeat'){
            return `${elementInput} animated heartBeat`;
        } else if (chosen === true && animation === 'Flip'){
            return `${elementInput} animated flip`;
        }


        //Appear animation
        if (chosen === true && animation === 'Bounce in'){
            return `${elementInput} animated bounceIn`;
        } else if (chosen === true && animation === 'Bounce in down'){
            return `${elementInput} animated bounceInDown`;
        } else if (chosen === true && animation === 'Bounce in left'){
            return `${elementInput} animated bounceInLeft`;
        } else if (chosen === true && animation === 'Bounce in right'){
            return `${elementInput} animated bounceInRight`;
        } else if (chosen === true && animation === 'Bounce in up'){
            return `${elementInput} animated bounceInUp`;
        } else if (chosen === true && animation === 'Fade in'){
            return `${elementInput} animated fadeIn`;
        } else if (chosen === true && animation === 'Fade in down'){
            return `${elementInput} animated fadeInDown`;
        } else if (chosen === true && animation === 'Fade in left'){
            return `${elementInput} animated fadeInLeft`;
        } else if (chosen === true && animation === 'Fade in right'){
            return `${elementInput} animated fadeInRight`;
        } else if (chosen === true && animation === 'Fade in up'){
            return `${elementInput} animated fadeInUp`;
        } else if (chosen === true && animation === 'Flip in X'){
            return `${elementInput} animated flipInX`;
        } else if (chosen === true && animation === 'Flip in Y'){
            return `${elementInput} animated flipInY`;
        } else if (chosen === true && animation === 'Slide in down'){
            return `${elementInput} animated slideInDown`;
        } else if (chosen === true && animation === 'Slide in left'){
            return `${elementInput} animated slideInLeft`;
        } else if (chosen === true && animation === 'Slide in right'){
            return `${elementInput} animated slideInRight`;
        } else if (chosen === true && animation === 'Slide in up'){
            return `${elementInput} animated slideInUp`;
        } else if (chosen === true && animation === 'Zoom in'){
            return `${elementInput} animated zoomIn`;
        } else if (chosen === true && animation === 'Jack in the box'){
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
                        <img className="selected" style={this.animationStyle('logo')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('product_image')} style={this.getStyle('product_image')}>
                        <span>Product-image</span>
                        <img className="selected" style={this.animationStyle('product_image')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('product_video')} style={this.getStyle('product_video')}>
                        <span>Product-video</span>
                        <img className="selected" style={this.animationStyle('product_video')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('title')} style={this.getStyle('title')}>
                        <span>Main title</span>
                        <img className="selected" style={this.animationStyle('title')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('subtitle')} style={this.getStyle('subtitle')}>
                        <span>Subtitle</span>
                        <img className="selected" style={this.animationStyle('subtitle')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div> 
                    <div className={this.posAnimation('video_bg')} style={this.getStyle('video_bg')}>
                        <span className="bg-vid-span">Background-video</span>
                        <img className="selected" style={this.animationStyle('video_bg')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('image_bg')} style={this.getStyle('image_bg')}>
                        <span className="bg-vid-span">Background-image</span>
                        <img className="selected" style={this.animationStyle('image_bg')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div>
                    <div className={this.posAnimation('pancake')}  style={this.getStyle('pancake')}>
                        <span>Pancake Element</span>
                        <img className="selected" style={this.animationStyle('pancake')} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/animted_icon.png" alt="check"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default TemplatePreview
