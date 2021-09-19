import React, { Component } from "react";
import Sketch from "react-p5";

import { addText } from './addText';

// const imgURL = "https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg";
// const imgURL = "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
const imgURL = "https://media.istockphoto.com/photos/happy-handsome-man-with-crossed-arms-looking-at-camera-isolated-on-picture-id1160729806?k=20&m=1160729806&s=612x612&w=0&h=8D2BXoY7-dAIj8Q19Du1z8_71T8HshBeKLpEZezOLvI=";

let img = null;

export default class App extends Component {
  preload = (p5) => {
    img = p5.loadImage(imgURL);
  };

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.image(img, 0, 0);
    addText({
      p5,
      x: 25, y: 25, x2: 210, y2: 350,
      textString: "Because no one should ever have to choose between chocolate and peanut butter.",
      textSize: 32,
      // textColor: "blue",
      // backgroundColor: "rgba(0,255,0, 0.05)",
    });
  };

  render() {
    return <Sketch preload={this.preload} setup={this.setup} />;
  }
}
