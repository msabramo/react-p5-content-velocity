import Sketch from "react-p5";

import { addText } from './addText';

export const ProcessedImage = ({ imageURL }) => {
  let img;

  const preload = (p5) => {
    img = p5.loadImage(imageURL);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(img.width, img.height).parent(canvasParentRef);
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
  
  return <Sketch preload={preload} setup={setup} />;
};

export default ProcessedImage;
