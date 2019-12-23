import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import './icon-style/flaticon.css'
import './App.css';

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
    chosenElements: [
      {
        id: 1,
        element: 'logo',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: ['Geen animatie'],
          attentionAnimation: [

          ],
          appearAnimation: [
            'Appear animatie - Bounce in',
            'Appear animatie - Bounce in down',
            'Appear animatie - Bounce in left',
            'Appear animatie - Bounce in right',
            'Appear animatie - Bounce in up',
            'Appear animatie - Fade in',
            'Appear animatie - Fade in down',
            'Appear animatie - Fade in left',
            'Appear animatie - Fade in right',
            'Appear animatie - Fade in up',
            'Appear animatie - Flip in X',
            'Appear animatie - Flip in Y',
            'Appear animatie - Slide in down',
            'Appear animatie - Slide in left',
            'Appear animatie - Slide in right',
            'Appear animatie - Slide in up',
            'Appear animatie - Zoom in',
            'Appear animatie - Jack in the box'
          ]
        }
      },
      {
        id: 2,
        element: 'main-title',
        selected: false,
        mouseOn: false,
        animation: 'Appear animatie - Flip in X',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie',
            'Veranderen content'
          ],
          attentionAnimation: [
            'Attention animatie - Flash',
            'Attention animatie - Shake',
            'Attention animatie - Pulse',
            'Attention animatie - Tada',
            'Attention animatie - Heartbeat',
            'Attention animatie - Flip'
          ],
          appearAnimation: [
            'Appear animatie - Bounce in',
            'Appear animatie - Bounce in down',
            'Appear animatie - Bounce in left',
            'Appear animatie - Bounce in right',
            'Appear animatie - Bounce in up',
            'Appear animatie - Fade in',
            'Appear animatie - Fade in down',
            'Appear animatie - Fade in left',
            'Appear animatie - Fade in right',
            'Appear animatie - Fade in up',
            'Appear animatie - Flip in X',
            'Appear animatie - Flip in Y',
            'Appear animatie - Slide in down',
            'Appear animatie - Slide in left',
            'Appear animatie - Slide in right',
            'Appear animatie - Slide in up',
            'Appear animatie - Zoom in',
            'Appear animatie - Jack in the box'
          ]
        }
      },
      {
        id: 3,
        element: 'subtitle',
        selected: false,
        mouseOn: false,
        animation: 'Appear animatie - Slide in up',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Attention animatie - Flash',
            'Attention animatie - Shake',
            'Attention animatie - Pulse',
            'Attention animatie - Tada',
            'Attention animatie - Heartbeat',
            'Attention animatie - Flip'
          ],
          appearAnimation: [
            'Appear animatie - Bounce in',
            'Appear animatie - Bounce in down',
            'Appear animatie - Bounce in left',
            'Appear animatie - Bounce in right',
            'Appear animatie - Bounce in up',
            'Appear animatie - Fade in',
            'Appear animatie - Fade in down',
            'Appear animatie - Fade in left',
            'Appear animatie - Fade in right',
            'Appear animatie - Fade in up',
            'Appear animatie - Flip in X',
            'Appear animatie - Flip in Y',
            'Appear animatie - Slide in down',
            'Appear animatie - Slide in left',
            'Appear animatie - Slide in right',
            'Appear animatie - Slide in up',
            'Appear animatie - Zoom in',
            'Appear animatie - Jack in the box'
          ]
        }
      },
      {
        id: 4,
        element: 'productimage',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Attention animatie - Flash',
            'Attention animatie - Shake',
            'Attention animatie - Pulse',
            'Attention animatie - Tada',
            'Attention animatie - Heartbeat',
            'Attention animatie - Flip'
          ],
          appearAnimation: [
          ]
        }
      },
      {
        id: 5,
        element: 'backgroundvideo',
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
        element: 'productvideo',
        selected: false,
        mouseOn: false,
        animation: 'Geen animatie',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Attention animatie - Flash',
            'Attention animatie - Shake',
            'Attention animatie - Pulse',
            'Attention animatie - Tada',
            'Attention animatie - Heartbeat',
            'Attention animatie - Flip'
          ],
          appearAnimation: [
          ]
        }
      },
      {
        id: 7,
        element: 'pancake-element',
        selected: false,
        mouseOn: false,
        animation: 'Attention animatie - Pulse',
        possibleAnimation: {
          standardAnimation: [
            'Geen animatie'
          ],
          attentionAnimation: [
            'Attention animatie - Flash',
            'Attention animatie - Shake',
            'Attention animatie - Pulse',
            'Attention animatie - Tada',
            'Attention animatie - Heartbeat',
            'Attention animatie - Flip'
          ],
          appearAnimation: [
            'Appear animatie - Bounce in',
            'Appear animatie - Bounce in down',
            'Appear animatie - Bounce in left',
            'Appear animatie - Bounce in right',
            'Appear animatie - Bounce in up',
            'Appear animatie - Fade in',
            'Appear animatie - Fade in down',
            'Appear animatie - Fade in left',
            'Appear animatie - Fade in right',
            'Appear animatie - Fade in up',
            'Appear animatie - Flip in X',
            'Appear animatie - Flip in Y',
            'Appear animatie - Slide in down',
            'Appear animatie - Slide in left',
            'Appear animatie - Slide in right',
            'Appear animatie - Slide in up',
            'Appear animatie - Zoom in',
            'Appear animatie - Jack in the box'
          ]
        }
      },
      {
        id: 8,
        element: 'background-image',
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
    if (f === 'Product' || f === 'Frame') {
      this.setState({
        chosenElements: this.state.chosenElements.map(elem => {
          if (elem.element === 'productimage' || elem.element === 'logo' || elem.element === 'main-title' || elem.element === 'subtitle') {
            elem.selected = true;
          }
          if (elem.element === 'backgroundvideo' || elem.element === 'background-image' || elem.element === 'pancake-element' || elem.element === 'productvideo') {
            elem.selected = false;
          }
          return elem;
        })
      });
    } else if (f === 'Message') {
      this.setState({
        chosenElements: this.state.chosenElements.map(elem => {
          if (elem.element === 'backgroundvideo' || elem.element === 'logo' || elem.element === 'main-title' || elem.element === 'subtitle') {
            elem.selected = true;
          }
          if (elem.element === 'productimage' || elem.element === 'background-image' || elem.element === 'pancake-element' || elem.element === 'productvideo') {
            elem.selected = false;
          }
          return elem;
        })
      });
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

    const prodImSel = this.state.chosenElements.find(x => x.element === 'productimage').selected;
    const prodVidSel = this.state.chosenElements.find(x => x.element === 'productvideo').selected;

    const bgImSel = this.state.chosenElements.find(x => x.element === 'background-image').selected;
    const bgVidSel = this.state.chosenElements.find(x => x.element === 'backgroundvideo').selected;

    if (g === 'productvideo') {
      if (prodImSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'productimage') {
              elem.selected = !elem.selected;
            }
            return elem;
          })
        });
      }
    } else if (g === 'productimage') {
      if (prodVidSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'productvideo') {
              elem.selected = !elem.selected;
            }
            return elem;
          })
        });
      }
    } else if (g === 'backgroundvideo') {
      if (bgImSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'background-image') {
              elem.selected = !elem.selected;
            }
            return elem;
          })
        });
      }
    } else if (g === 'background-image') {
      if (bgVidSel === true) {
        this.setState({
          chosenElements: this.state.chosenElements.map(elem => {
            if (elem.element === 'backgroundvideo') {
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
          console.log(this.state.chosenElements.find(x => x.element === e).mouseOn);
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
          console.log(this.state.chosenElements.find(x => x.element === f).mouseOn);
        }
        return elem;
      })
    });
  }

  buttonAction = () => {
    const f = this.state.currentCategory;
    console.log('hoi')
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
      console.log(this.state);
    } else if (this.state.categoryChosen === true && this.state.elementChosen === false && this.state.animationChosen === false) {
      this.setState({ elementChosen: true, currentButton: 'See DOOH overview', currentBackButton: 'Back to elements' });
      console.log(this.state);
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === false) {
      this.setState({ animationChosen: true, currentButton: 'Export DOOH', currentBackButton: 'Back to animation' });

      console.log('Kijk je overview');
    }
    // else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === true) {
    //   // Export
    //   console.log('export started');
    //   console.log(this.state);
    //   startProces(this.state)
    // }
  }

  exportAction = () => {
    console.log('export started');
    console.log(this.state);
    startProces(this.state)
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
      categoryChosen: false,
      elementChosen: false,
      animationChosen: false,
      previewMode: 'Portrait',
      chosenElements: [
        {
          id: 1,
          element: 'logo',
          selected: false,
          animation: 'check'
        },
        {
          id: 2,
          element: 'main-title',
          selected: false,
          animation: 'check'
        },
        {
          id: 3,
          element: 'subtitle',
          selected: false,
          animation: 'check'
        },
        {
          id: 4,
          element: 'productimage',
          selected: false,
          animation: 'check'
        },
        {
          id: 5,
          element: 'backgroundvideo',
          selected: false,
          animation: 'check'
        },
        {
          id: 6,
          element: 'productvideo',
          selected: false,
          animation: 'check'
        },
        {
          id: 7,
          element: 'pancake-element',
          selected: false,
          animation: 'check'
        },
        {
          id: 8,
          element: 'background-image',
          selected: false,
          animation: 'check'
        }
      ]
    })
    console.log(this.state);
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
              <button className="nextBtn animated bounce" onClick={this.buttonAction}>{this.state.currentButton} <i className="flaticon-right"></i></button>
              <button className="backBtn" style={this.backBtnStyle()} onClick={this.backBtnAction}><i className="flaticon-left-arrow-angle-big-gross-symbol"></i>{this.state.currentBackButton}</button>
            </div>
            <div className={this.rightColClass()}>
              <div className="col-md-10 rightContent">
                <PreviewOption changeCanvas={this.changeCanvas} curCat={this.state.currentCategory} previewMode={this.state.previewMode} anmChosen={this.state.animationChosen} />
                <TemplatePreview curCat={this.state.currentCategory} previewMode={this.state.previewMode} isSelected={this.state.chosenElements} elementChosen={this.state.elementChosen} />
                <button className="exportBtn" style={this.state.animationChosen ? { display: 'block' } : { display: 'none' }} onClick={this.exportAction}>Export DOOH <i className="flaticon-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

