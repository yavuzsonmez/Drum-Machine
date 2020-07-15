import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: "Click or Press caps lock + button !"
    }
    this.handleTrigger = this.handleTrigger.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


    componentDidMount(){
  document.addEventListener("keydown", this.handleKeyPress);
  var audio_q = document.getElementById("Q");
  var audio_w = document.getElementById("W");
  var audio_e = document.getElementById("E");
  var audio_a = document.getElementById("A");
  var audio_s = document.getElementById("S");
  var audio_d = document.getElementById("D");
  var audio_z = document.getElementById("Z");
  var audio_x = document.getElementById("X");
  var audio_c = document.getElementById("C");

  audio_q.volume = 0.2;
  audio_w.volume = 0.2;
  audio_e.volume = 0.2;
  audio_a.volume = 0.2;
  audio_s.volume = 0.2;
  audio_d.volume = 0.2;
  audio_z.volume = 0.2;
  audio_x.volume = 0.2;
  audio_c.volume = 0.2;
  }
    componentWillUnmount(){
  document.removeEventListener("keydown", this.handleKeyPress);
  }
    
   handleTrigger(ide){
    document.getElementById(ide).play();
  }
  
  handleDisplay(name){
    this.setState({
      track: name
    })
  }
    
  handleKeyPress(event){
    switch(event.key){
      case 'Q':
        document.getElementById("Heater-1").classList.toggle("button-active:active");
        this.handleTrigger("Q");
        this.handleDisplay("Heater-1");
        break;
      case 'W':
        document.getElementById("Heater-2").classList.toggle("button-active");
        this.handleTrigger("W");
        this.handleDisplay("Heater-2");
        break;
      case 'E':
        document.getElementById("Heater-3").classList.toggle("button-active");
        this.handleTrigger("E");
        this.handleDisplay("Heater-3");
        break;
      case 'A':
        document.getElementById("Heater-4").classList.toggle("button-active");
        this.handleTrigger("A");
        this.handleDisplay("Heater-4");
        break;
      case 'S':
        document.getElementById("Heater-6").classList.toggle("button-active");
        this.handleTrigger("S");
        this.handleDisplay("Heater-6");
        break;
      case 'D':
        document.getElementById("Cev_H2").classList.toggle("button-active");
        this.handleTrigger("D");
        this.handleDisplay("Cev_H2");
        break;
      case 'Z':
        document.getElementById("Dsc_Oh").classList.toggle("button-active");
        this.handleTrigger("Z");
        this.handleDisplay("Dsc_Oh");
        break;
      case 'X':
        document.getElementById("Kick_n_Hat").classList.toggle("button-active");
        this.handleTrigger("X");
        this.handleDisplay("Kick_n_Hat");
        break;
      case 'C':
        document.getElementById("RP4_KICK_1").classList.toggle("button-active");
        this.handleTrigger("C");
        this.handleDisplay("RP4_KICK_1");
        break;
      default:
        console.log(" ");
    }
  }
  
  render() {

      return (
        <div id="drum-machine">
    <div id="display">
      <p>{this.state.track}</p>
      </div>
          <h1>DRUM MACHINE</h1>
          <div id="div1">
          <button className="drum-pad" id="Heater-1" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("Q"); this.handleDisplay("Heater-1")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q" />Q</button>
  
          <button className="drum-pad" id="Heater-2" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("W"); this.handleDisplay("Heater-2")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W" />W</button>
          <button className="drum-pad" id="Heater-3" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("E"); this.handleDisplay("Heater-3")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E" />E</button>
            </div><div id="div2">
          <button className="drum-pad" id="Heater-4" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("A"); this.handleDisplay("Heater-4")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A" />A</button>
          <button className="drum-pad" id="Heater-6" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("S"); this.handleDisplay("Heater-6")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S" />S</button>
          <button className="drum-pad" id="Cev_H2" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("D"); this.handleDisplay("Cev_H2")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="D" />D</button>
          </div><div id="div3">
          <button className="drum-pad" id="Dsc_Oh" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("Z"); this.handleDisplay("Dsc_Oh")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="Z" />Z</button>
          <button className="drum-pad" id="Kick_n_Hat" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("X"); this.handleDisplay("Kick_n_Hat")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="X" />X</button>
          <button className="drum-pad" id="RP4_KICK_1" onKeyPress={this.handleKeyPress} onClick={() => {this.handleTrigger("C"); this.handleDisplay("RP4_KICK_1")}}><audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="C" />C</button>
          </div>
          <h6>Designed & Coded by <a className="hov" href="https://yavuzsonmez.com/">Yavuz Sönmez</a></h6>
          <h6><a className="hov" href="https://yavuzsonmez.com/portofolio">Return to Portofolio</a></h6>
    </div>
      )
    }
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));