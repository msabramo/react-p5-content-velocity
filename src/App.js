import React from "react";

import ProcessedImage from './ProcessedImage'

import * as classes from './ImageGallery.module.scss';

const imageURLs = [
  "https://media.istockphoto.com/photos/happy-handsome-man-with-crossed-arms-looking-at-camera-isolated-on-picture-id1160729806?k=20&m=1160729806&s=612x612&w=0&h=8D2BXoY7-dAIj8Q19Du1z8_71T8HshBeKLpEZezOLvI=",
  "https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg",
  "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
];

export const App = () => {
  return (<>
    <h1>An app using react-p5</h1>

    <div className={classes.imageGallery}>
      {imageURLs.map(imageURL =>
        <ProcessedImage imageURL={imageURL} />
      )}
    </div>
  </>);
};

export default App;
