// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
import Header from "./Header.js"
import { nextFrame } from "@tensorflow/tfjs";
// 2. TODO - Import drawing utility here
import {drawRect} from "./utilities";
import 'bootstrap/dist/css/bootstrap.css';


var challenge2=0;


const App = (props) => {


  challenge2=props.challenge;
  //console.log("Challenge 2 is: "+challenge2);

  const getNewChallenge =() =>{
    return challenge2;
  }



 

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network 
    const net = await tf.loadGraphModel('https://bslmodel2.s3.eu-gb.cloud-object-storage.appdomain.cloud/model.json')

    // Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)



      
      const boxes = await obj[6].array()
      const classes = await obj[2].array()
      const scores = await obj[3].array()

      //console.log('Classes are: '+classes[0][0]);
      //console.log('Scores are: '+scores[0][0]);


      let detectedClass=classes[0][0];

      let classScore=scores[0][0];
      
      var latestChallenge=getNewChallenge();
      //console.log("Score printing from the App is"+ score)
      //console.log("Challenge from the App is"+challenge)
      //console.log("Challenge is "+latestChallenge)


      if (detectedClass==latestChallenge && classScore>0.65){
        //score++;
        //console.log("About to call the super method");
        props.newChallenge();
        props.updateScore();

        
        //challengeClass=classesList[Math.floor(Math.random()*classesList.length)];   
        
      }
      


    
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.6, videoWidth, videoHeight, ctx)}); 

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(()=>{runCoco()},[]);




  return (   

    <div className="App">

      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />



        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />




      </header>
    </div>

 



  );

};


export default App;


