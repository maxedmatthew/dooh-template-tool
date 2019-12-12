import React, { Component } from 'react';
import './AnimationSelection.css';

class AnimationSelection extends Component {
    render() {
        return (
            <div className="AnimationSelection">
                <h3>Choose your animation</h3>
                <p>
                    <span>Logo / Brandname</span>
                    <select name="LogoAnimation" className="selectFormAnimation">
                        <option value="noAnimation">-- No animation --</option>
                        <option value="Optie2">Appear animation</option>
                        <option value="Optie3">Change content</option>
                        <option value="Optie4">Attention animation</option>
                    </select>
                </p>
                <p>
                    <span>Main title</span>
                    <select name="LogoAnimation" className="selectFormAnimation">
                        <option value="noAnimation">-- No animation --</option>
                        <option value="Optie2">Appear animation</option>
                        <option value="Optie3">Change content</option>
                        <option value="Optie4">Attention animation</option>
                    </select>
                </p>
                <p>
                    <span>Subtitle</span>
                    <select name="LogoAnimation" className="selectFormAnimation">
                        <option value="noAnimation">-- No animation --</option>
                        <option value="Optie2">Appear animation</option>
                        <option value="Optie3">Change content</option>
                        <option value="Optie4">Attention animation</option>
                    </select>
                </p>
                <p>
                    <span>Productimage</span>
                    <select name="LogoAnimation" className="selectFormAnimation">
                        <option value="noAnimation">-- No animation --</option>
                        <option value="Optie2">Appear animation</option>
                        <option value="Optie3">Change content</option>
                        <option value="Optie4">Attention animation</option>
                    </select>
                </p>
            </div>
        )
    }
}

export default AnimationSelection
