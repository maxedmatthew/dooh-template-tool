import React, { Component } from 'react';
import './CategoryButtons.css'

class CategoryButtons extends Component {
    // Function to color the active category-button
    createStyle = (e) => {
        const currentCategory = this.props.curCat;
        if(currentCategory === e){
            return { backgroundColor: '#6A73D0', color: '#fff'}
        }
    }

    render() {
        return (
            <div className="categoryButtons col-md-6">
                <h3>
                    Choose DOOH category
                    <div className="categoryInfo">
                        <i className="flaticon-information"></i>
                        <div className="information">
                            <span className="rTriangle"></span>
                            <h4>Product</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis.</p>
                            <h4 className="extra-margin">Message</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis.</p>
                            <h4 className="extra-margin">Frame</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis.</p>
                        </div>
                    </div>
                </h3>
                <button style={this.createStyle('Product')} onClick={this.props.changeCategory.bind(this, 'Product')}>Product</button>
                <button style={this.createStyle('Message')} onClick={this.props.changeCategory.bind(this, 'Message')}>Message</button>
                <button style={this.createStyle('Frame')} onClick={this.props.changeCategory.bind(this, 'Frame')}>Frame</button>
                <p className="warning">{this.props.curWarning}</p>
            </div>
        )
    }
}

export default CategoryButtons
