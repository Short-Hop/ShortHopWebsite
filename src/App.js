import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/styles.css';
import icon from "./assets/icon.png";
import BlueHero from "./assets/Hero Blue.png"
import OrangeHero from "./assets/Hero Orange.png"
import Developer from "./components/Developer"
import ContentCreator from "./components/ContentCreator"
import ItemDetails from './components/ItemDetails'


const getPixels = require("get-pixels");


let height = 720;
let width = window.innerWidth;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function App() {

  // let IconCanvas = <canvas id="IconCanvas" width={width} height={height}></canvas>

  // useEffect(() => {
  //   var c = document.getElementById("IconCanvas")
  //   var ctx = c.getContext("2d")

  //   getPixels(icon, function(err, pixels) {
  //     if(err) {
  //       console.log(err)
  //       return
  //     }
  //     console.log(pixels.get(100, 0, 0))
  //     console.log(pixels.get(100, 0, 1))
  //     console.log(pixels.get(100, 0, 2))
  //     console.log(pixels.get(100, 0, 3))



  //     ctx.fillStyle = "#000000"
  //     ctx.fillRect(0,0, width, height)

  //     let pixelInfo = []

  //     for(let j = 0; j < 400; j++) {
  //       for(let i = 0; i < 400; i++) {

  //         if (pixels.get(i, j, 3) !== 0) {
  //           let newPixel = {
  //             originx: (width/2 - 200) + i,
  //             originy: j,
  //             randomx: Math.floor(Math.random()*width),
  //             randomy: Math.floor(Math.random()*height),
  //             color: `rgba(${pixels.get(i, j, 0)}, ${pixels.get(i, j, 1)}, ${pixels.get(i, j, 2)}, ${pixels.get(i, j, 3)/255})`,
  //           }

  //           pixelInfo.push(newPixel)
  //         }
          

  //       }
  //     }

  //     pixelInfo.forEach(pixel => {
  //       ctx.fillStyle = pixel.color
  //       ctx.fillRect(pixel.randomx, pixel.randomy, 1, 1)
  //     })

  //     setInterval(() => {
  //       ctx.fillStyle = "#000000"
  //       ctx.fillRect(0,0, width, height)

  //       pixelInfo.forEach(pixel => {

  //         ctx.fillStyle = pixel.color
  //         if (pixel.randomx < pixel.originx) {
  //           let difference = pixel.originx - pixel.randomx;
  //           pixel.randomx = pixel.randomx + Math.ceil(difference/30);

  //         } else if (pixel.randomx > pixel.originx) {
  //           let difference = pixel.originx - pixel.randomx;
  //           pixel.randomx = pixel.randomx + Math.floor(difference/30);
  //         }

  //         if (pixel.randomy < pixel.originy) {
  //           let difference = pixel.originy - pixel.randomy;
  //           pixel.randomy = pixel.randomy + Math.ceil(difference/30);

  //         } else if (pixel.randomy > pixel.originy) {
  //           let difference = pixel.originy - pixel.randomy;
  //           pixel.randomy = pixel.randomy + Math.floor(difference/30);
  //         }

  //         ctx.fillRect(pixel.randomx, pixel.randomy, 1, 1)

  //       })
  //     }, 16)

  //     ctx.fillStyle = `rgba(${pixels.get(100, 100, 0)}, ${pixels.get(100, 100, 1)}, ${pixels.get(100, 100, 2)}, ${pixels.get(100, 100, 3)/255})`;

      

  //     ctx.fillRect(100, 100, 1, 1)
  //   })


  // })

  return (
    <div>
      <div className="hero">
        <div className="hero__images">
          <div className="hero__images--orange"></div>
          <div className="hero__images--blue"></div>
        </div>
      </div>
      
      <Developer/>
      <ContentCreator/>
      <ItemDetails/>
    </div>
  );
}

export default App;
