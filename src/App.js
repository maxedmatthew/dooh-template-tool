import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './icon-style/flaticon.css'
import './App.css';

import CategoryButtons from './components/CategoryButtons/CategoryButtons';
import PreviewOption from './components/PreviewOption/PreviewOption';
import TemplatePreview from './components/TemplatePreview/TemplatePreview';
import ElementSelection from './components/ElementSelection/ElementSelection';
import AnimationSelection from './components/AnimationSelection/AnimationSelection';

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
    chosenElements : [
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
  }

  changeCanvas = (e) =>{
    this.setState({ previewMode: e });
  }

  changeCategory = (f) => {
    this.setState({ currentCategory: f });
    
    // If category is ... change state so the right elements are selected
    if (f === 'Product' || f === 'Frame'){
      this.setState({ chosenElements: this.state.chosenElements.map(elem =>{
        if(elem.element === 'productimage' || elem.element === 'logo' || elem.element === 'main-title' || elem.element === 'subtitle'){
          elem.selected = true;
        }
        if(elem.element === 'backgroundvideo'){
          elem.selected = false;
        }
        return elem;
      }) });
    }else if (f === 'Message'){
      this.setState({ chosenElements: this.state.chosenElements.map(elem =>{
        if(elem.element === 'backgroundvideo' || elem.element === 'logo' || elem.element === 'main-title' || elem.element === 'subtitle'){
          elem.selected = true;
        }
        if(elem.element === 'productimage'){
          elem.selected = false;
        }
        return elem;
      }) });
    }
    console.log(this.state);

  }

  // Change element in state when it's get selected
  changeElement = (g) => {
    this.setState({ chosenElements: this.state.chosenElements.map(elem => {
      if(elem.element === g){
          elem.selected = !elem.selected;
       }
       return elem;
    }) });
  
    // noDoubleElem();

    const prodImSel = this.state.chosenElements.find(x => x.element === 'productimage').selected;
    const prodVidSel = this.state.chosenElements.find(x => x.element === 'productvideo').selected;

    const bgImSel = this.state.chosenElements.find(x => x.element === 'background-image').selected;
    const bgVidSel = this.state.chosenElements.find(x => x.element === 'backgroundvideo').selected;

    if (g === 'productvideo'){
      if (prodImSel === true){
        this.setState({ chosenElements: this.state.chosenElements.map(elem => {
          if(elem.element === 'productimage'){
              elem.selected = !elem.selected;
           }
           return elem;
        }) });
      }
    } else if (g === 'productimage'){
      if (prodVidSel === true){
        this.setState({ chosenElements: this.state.chosenElements.map(elem => {
          if(elem.element === 'productvideo'){
              elem.selected = !elem.selected;
           }
           return elem;
        }) });
      }
    } else if (g === 'backgroundvideo'){
      if (bgImSel === true){
        this.setState({ chosenElements: this.state.chosenElements.map(elem => {
          if(elem.element === 'background-image'){
              elem.selected = !elem.selected;
           }
           return elem;
        }) });
      }
    } else if (g === 'background-image'){
      if (bgVidSel === true){
        this.setState({ chosenElements: this.state.chosenElements.map(elem => {
          if(elem.element === 'backgroundvideo'){
              elem.selected = !elem.selected;
           }
           return elem;
        }) });
      }
    }

  }

  buttonAction = () => {
    const f = this.state.currentCategory;

    if (this.state.categoryChosen === false && this.state.elementChosen === false && this.state.animationChosen === false){      
      if (f !== ''){
        this.setState({ categoryChosen: true, currentButton: 'Choose animation', currentBackButton: 'Back to category' });
      }else{
        if(this.state.currentWarning === ''){
            this.setState({ currentWarning: 'First select a category'});
            setTimeout(() => {
              this.setState({ currentWarning: ''});
            }, 5000);

        }
      }
    } else if (this.state.categoryChosen === true && this.state.elementChosen === false && this.state.animationChosen === false){
      this.setState({ elementChosen: true, currentButton: 'See DOOH overview', currentBackButton: 'Back to elements' });
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === false) {
      this.setState({ animationChosen: true, currentButton: 'Export DOOH', currentBackButton: 'Back to animation' });
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === true) {
      // Export
      console.log('export started')
    }
  }

  backBtnAction = () => {
    if (this.state.categoryChosen === false && this.state.elementChosen === false && this.state.animationChosen === false){

    } else if (this.state.categoryChosen === true && this.state.elementChosen === false && this.state.animationChosen === false){
      this.setState({ categoryChosen: false, currentButton: 'Choose elements', currentBackButton: ''});
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === false){
      this.setState({ elementChosen: false, currentButton: 'Choose animation', currentBackButton: 'Back to category' });
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === true){
      this.setState({ animationChosen: false, currentButton: 'See DOOH overview', currentBackButton: 'Back to elements' });
    }
  }
  
  loadComponent = () => {
    if (this.state.categoryChosen === false && this.state.elementChosen === false && this.state.animationChosen === false){
      // Display categorie-option component
      return( <CategoryButtons changeCategory={this.changeCategory} curCat={this.state.currentCategory} curWarning={this.state.currentWarning} />);
    } else if (this.state.categoryChosen === true && this.state.elementChosen === false && this.state.animationChosen === false){
      // Display element-option component
      return( <ElementSelection changeElement={this.changeElement} isSelected={this.state.chosenElements}/> );
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === false){
      // Display animation-option component
      return( <AnimationSelection /> );
    } else if (this.state.categoryChosen === true && this.state.elementChosen === true && this.state.animationChosen === true){
      // Display end-preview component
    }
  }

  backBtnStyle = () => {
    if (this.state.categoryChosen === true){
      return{ display: 'block'}
    } else{
      return{ display: 'none'}
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
      chosenElements : [
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

  render() {
    return (
      <div className="overalApp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 leftCol">
              <img className="logoGH" onClick={this.resetStateFunc} src="https://maxedmatthew.nl/ofj/wp-content/uploads/2019/12/GH-logo-white_RGB.png" alt="Logo Greenhouse" />
              {this.loadComponent()}
              <button className="nextBtn" onClick={this.buttonAction}>{this.state.currentButton} <i className="flaticon-right"></i></button>
              <button className="backBtn" style={this.backBtnStyle()} onClick={this.backBtnAction}><i className="flaticon-left-arrow-angle-big-gross-symbol"></i>{this.state.currentBackButton}</button>
            </div>
            <div className="col-md-6 rightCol">
              <div className="col-md-10 rightContent">
                <PreviewOption changeCanvas={this.changeCanvas} curCat={this.state.currentCategory} previewMode={this.state.previewMode} />
                <TemplatePreview curCat={this.state.currentCategory} previewMode={this.state.previewMode} isSelected={this.state.chosenElements} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

