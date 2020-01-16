import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import './icon-style/flaticon.css'
import './App.css';
import 'downloadjs/download.js';

import CategoryButtons from './components/CategoryButtons/CategoryButtons';
import PreviewOption from './components/PreviewOption/PreviewOption';
import TemplatePreview from './components/TemplatePreview/TemplatePreview';
import ElementSelection from './components/ElementSelection/ElementSelection';
import AnimationSelection from './components/AnimationSelection/AnimationSelection';
import startProces from './utils/startProces'

class App extends Component {
  state = {
    currentCategory: '',
    currentButton: 'Choose elements',
    currentBackButton: '',
    currentWarning: '',
    categoryChosen: false,
    elementChosen: false,
    animationChosen: false,
    previewMode: 'Portrait',
    exportClicked: false,
    chosenElements: [
      {
        id: 1,
        element: 'logo',
        fullName: 'Logo',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: ['Geen animatie'],
          attentionAnimation: [

          ],
          appearAnimation: [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 2,
        element: 'title',
        fullName: 'Main title',
        selected: false,
        mouseOn: false,
        animation: 'Flip in X',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie',
            'Veranderen content'
          ],
          attentionAnimation: [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation: [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 3,
        element: 'subtitle',
        fullName: 'Subtitle',
        selected: false,
        mouseOn: false,
        animation: 'Slide in up',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation: [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 4,
        element: 'product_image',
        fullName: 'Product-image',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation: [
          ]
        }
      },
      {
        id: 5,
        element: 'video_bg',
        fullName: 'Background-video',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie',
            'Langzaam vergroten',
            'Veranderen content'
          ],
          attentionAnimation: [
          ],
          appearAnimation: [
          ]
        }
      },
      {
        id: 6,
        element: 'product_video',
        fullName: 'Product-video',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation: [
          ]
        }
      },
      {
        id: 7,
        element: 'pancake',
        fullName: 'Pancake element',
        selected: false,
        mouseOn: false,
        animation: 'Pulse',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation: [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 8,
        element: 'image_bg',
        fullName: 'Background-image',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie',
            'Langzaam vergroten',
            'Veranderen content'
          ],
          attentionAnimation: [
          ],
          appearAnimation: [
          ]
        }
      }
    ]
  }

  changeCanvas = (e) => {
    this.setState({ previewMode: e });
  }

  changeCategory = (f) => {
    this.setState({ currentCategory: f });
    
    // If category is ... change state so the right elements are selected
    if (f === 'Product' || f === 'Frame'){
      this.setState({ chosenElements: this.state.chosenElements.map(elem =>{
        if(elem.element === 'product_image' || elem.element === 'logo' || elem.element === 'title' || elem.element === 'subtitle'){
          elem.selected = true;
        }
        if(elem.element === 'video_bg' || elem.element === 'image_bg' || elem.element === 'pancake' || elem.element === 'product_video'){
          elem.selected = false;
        }
        return elem;
      }) });
    }else if (f === 'Message'){
      this.setState({ chosenElements: this.state.chosenElements.map(elem =>{
        if(elem.element === 'video_bg' || elem.element === 'logo' || elem.element === 'title' || elem.element === 'subtitle'){
          elem.selected = true;
        }
        if(elem.element === 'product_image' || elem.element === 'image_bg' || elem.element === 'pancake' || elem.element === 'product_video'){
          elem.selected = false;
        }
        return elem;
      }) });
    }

  }

  // Change element in state when it's get selected
  changeElement = (g) => {

    this.setState({
      chosenElements: this.state.chosenElements.map(elem => {
        if (elem.element === g) {
          elem.selected = !elem.selected;
        }
        return elem;
      })
    });

    // Function that prevent double elements

    const prodImSel = this.state.chosenElements.find(x => x.element === 'product_image').selected;
    const prodVidSel = this.state.chosenElements.find(x => x.element === 'product_video').selected;

    const bgImSel = this.state.chosenElements.find(x => x.element === 'image_bg').selected;
    const bgVidSel = this.state.chosenElements.find(x => x.element === 'video_bg').selected;

    if (g === 'product_video') {
      if (prodImSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'product_image') {
              elem.selected = !elem.selected;
            }
            return elem;
          })
        });
      }
    } else if (g === 'product_image') {
      if (prodVidSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'product_video') {
              elem.selected = !elem.selected;
            }
            return elem;
          })
        });
      }
    } else if (g === 'video_bg') {
      if (bgImSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'image_bg') {
              elem.selected = !elem.selected;
            }
            return elem;
          })
        });
      }
    } else if (g === 'image_bg') {
      if (bgVidSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'video_bg') {
              elem.selected = !elem.selected;
            }
            return elem;
          })
        });
      }
    }

  }

  changeAnimation = (event) => {
    event.preventDefault();
    const elementName = event.target.name;
    const newValue = event.target.value;

    this.setState({
      chosenElements: this.state.chosenElements.map(elem => {
        if (elem.element === elementName) {
          elem.animation = newValue;
        }
        return elem;
      })
    });

    console.log(`De value van ${elementName} is nu ${newValue}`);
  }

  animationElementOnHover = (e) => {
    this.setState({
      chosenElements: this.state.chosenElements.map(elem => {
        if (elem.element === e) {
          elem.mouseOn = !elem.mouseOn;
          // console.log(this.state.chosenElements.find(x => x.element === e).mouseOn);
        }
        return elem;
      })
    });
  }

  animationElementOffHover = (f) => {
    this.setState({
      chosenElements: this.state.chosenElements.map(elem => {
        if (elem.element === f) {
          elem.mouseOn = !elem.mouseOn;
          // console.log(this.state.chosenElements.find(x => x.element === f).mouseOn);
        }
        return elem;
      })
    });
  }

  buttonAction = () => {
    const f = this.state.currentCategory;

    if (this.state.categoryChosen === false && this.state.elementChosen === false && this.state.animationChosen === false) {
      if (f !== '') {
        this.setState({ categoryChosen: true, currentButton: 'Choose animation', currentBackButton: 'Back to category' });
      } else {
        if (this.state.currentWarning === '') {
          this.setState({ currentWarning: 'First select a category' });
          setTimeout(() => {
            this.setState({ currentWarning: '' });
          }, 5000);

        }
      }
    } else if (this.state.categoryChosen === true && this.state.elementChosen === false && this.state.animationChosen === false) {
      this.setState({ elementChosen: true, currentButton: 'See DOOH overview', currentBackButton: 'Back to elements' });
      console.log('hi-1');
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === false) {
      this.setState({ animationChosen: true, currentButton: 'Export DOOH', currentBackButton: 'Back to animation' });
      
      this.setState({ elementChosen: false });
      setTimeout(() => {
        console.log('actie2');
        this.setState({ elementChosen: true });
      }, 10);

    }
  }

  exportAction = () => {
    console.log('------- export started -------');
    
    this.setState({ exportClicked: true });
    
    console.log(this.state.exportClicked);
    
    startProces(this.state);
  }

  backBtnAction = () => {
    if (this.state.categoryChosen === false && this.state.elementChosen === false && this.state.animationChosen === false) {

    } else if (this.state.categoryChosen === true && this.state.elementChosen === false && this.state.animationChosen === false) {

      // Back to choose category
      this.changeCategory(this.state.currentCategory);
      this.setState({ categoryChosen: false, currentButton: 'Choose elements', currentBackButton: '' });

    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === false) {
      this.setState({ elementChosen: false, currentButton: 'Choose animation', currentBackButton: 'Back to category' });
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === true) {
      this.setState({ animationChosen: false, currentButton: 'See DOOH overview', currentBackButton: 'Back to elements' });
    }
  }

  loadComponent = () => {
    if (this.state.categoryChosen === false && this.state.elementChosen === false && this.state.animationChosen === false) {
      // Display categorie-option component
      return (<CategoryButtons changeCategory={this.changeCategory} curCat={this.state.currentCategory} curWarning={this.state.currentWarning} />);
    } else if (this.state.categoryChosen === true && this.state.elementChosen === false && this.state.animationChosen === false) {
      // Display element-option component
      return (<ElementSelection changeElement={this.changeElement} isSelected={this.state.chosenElements} />);
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === false) {
      // Display animation-option component
      return (<AnimationSelection curElements={this.state.chosenElements} handleSubmit={this.changeAnimation} animationElementOnHover={this.animationElementOnHover} animationElementOffHover={this.animationElementOffHover} />);
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === true) {
      // Display end-preview component
    }
  }

  backBtnStyle = () => {
    if (this.state.categoryChosen === true) {
      return { display: 'block' }
    } else {
      return { display: 'none' }
    }
  }

  resetStateFunc = () => {
    this.setState({
      currentCategory: '',
    currentButton: 'Choose elements',
    currentBackButton: '',
    currentWarning: '',
    categoryChosen: false,
    elementChosen: false,
    animationChosen: false,
    previewMode: 'Portrait',
    chosenElements : [
      {
        id: 1,
        element: 'logo',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation : {
          standardAnimation : ['Geen animatie'],
          attentionAnimation : [

          ],
          appearAnimation : [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 2,
        element: 'title',
        selected: false,
        mouseOn: false,
        animation: 'Flip in X',
        possibleAnimation : {
          standardAnimation : [
            'Geen animatie',
            'Veranderen content'
          ],
          attentionAnimation : [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation : [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 3,
        element: 'subtitle',
        selected: false,
        mouseOn: false,
        animation: 'Slide in up',
        possibleAnimation : {
          standardAnimation : [
            'Geen animatie'
          ],
          attentionAnimation : [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation : [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 4,
        element: 'product_image',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation : {
          standardAnimation : [
            'Geen animatie'
          ],
          attentionAnimation : [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation : [
          ]
        }
      },
      {
        id: 5,
        element: 'video_bg',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation : {
          standardAnimation : [
            'Geen animatie',
            'Langzaam vergroten',
            'Veranderen content'
          ],
          attentionAnimation : [
          ],
          appearAnimation : [
          ]
        }
      },
      {
        id: 6,
        element: 'product_video',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation : {
          standardAnimation : [
            'Geen animatie'
          ],
          attentionAnimation : [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation : [
          ]
        }
      },
      {
        id: 7,
        element: 'pancake',
        selected: false,
        mouseOn: false,
        animation: 'Pulse',
        possibleAnimation : {
          standardAnimation : [
            'Geen animatie'
          ],
          attentionAnimation : [
            'Flash',
            'Shake',
            'Pulse',
            'Tada',
            'Heartbeat',
            'Flip'
          ],
          appearAnimation : [
            'Bounce in',
            'Bounce in down',
            'Bounce in left',
            'Bounce in right',
            'Bounce in up',
            'Fade in',
            'Fade in down',
            'Fade in left',
            'Fade in right',
            'Fade in up',
            'Flip in X',
            'Flip in Y',
            'Slide in down',
            'Slide in left',
            'Slide in right',
            'Slide in up',
            'Zoom in',
            'Jack in the box'
          ]
        }
      },
      {
        id: 8,
        element: 'image_bg',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation : {
          standardAnimation : [
            'Geen animatie',
            'Langzaam vergroten',
            'Veranderen content'
          ],
          attentionAnimation : [
          ],
          appearAnimation : [
          ]
        }
      }
    ]
    })
  }

  leftColClass = () => {
    if (this.state.animationChosen === true) {
      return 'leftCol endStyleLeft';
    } else {
      return 'col-md-6 leftCol';
    }
  }

  rightColClass = () => {
    if (this.state.animationChosen === true) {
      return 'col-md-12 rightCol endStyleRight';
    } else {
      return 'col-md-6 rightCol';
    }
  }

  render() {
    return (
      <div className="overalApp">
        <div className="container-fluid">
          <div className="row">
            <div className={this.leftColClass()}>
              <img className="logoGH" onClick={this.resetStateFunc} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/GH-logo-white_RGB.png" alt="Logo Greenhouse" />
              {this.loadComponent()}
              <button className="nextBtn" onClick={this.buttonAction}>{this.state.currentButton} <i className="flaticon-right"></i></button>
              <button className="backBtn" style={this.backBtnStyle()} onClick={this.backBtnAction}><i className="flaticon-left-arrow-angle-big-gross-symbol"></i>{this.state.currentBackButton}</button>
            </div>
            <div className={this.rightColClass()}>
            <img className="logoGH" onClick={this.resetStateFunc} style={this.state.animationChosen ? { display:'block'} : {display : 'none'}} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/GH-logo-white_RGB.png" alt="Logo Greenhouse" />
              <div className="col-md-10 rightContent">
                <PreviewOption changeCanvas={this.changeCanvas} curCat={this.state.currentCategory} previewMode={this.state.previewMode} anmChosen={this.state.animationChosen} />
                <TemplatePreview curCat={this.state.currentCategory} previewMode={this.state.previewMode} isSelected={this.state.chosenElements} elementChosen={this.state.elementChosen} animationChosen={this.state.animationChosen} />
                <button className="exportBtn" style={this.state.animationChosen ? { display:'block'} : {display : 'none'}} onClick={this.exportAction}>Export DOOH <i className="flaticon-right"></i></button>
              </div>
              <button className="backBtn" style={this.state.animationChosen ? { display:'block'} : {display : 'none'}} onClick={this.backBtnAction}><i className="flaticon-left-arrow-angle-big-gross-symbol"></i>Back to animation</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

