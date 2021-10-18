import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particlesOptions = {
  "particles": {
    "number": {
        "value": 60
    },
    "size": {
        "value": 3
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'd6d78438ab0b4a39b75dc7ef2464098f'
 });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  } 

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models
      .predict(
        'eeed0b6733a644cea07cf4c60f87ebb7',
        this.state.input)
      .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          //there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
                  params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageURL}/>
      </div>
    );
  }
}

export default App;
