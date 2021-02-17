import '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import { useEffect, useState } from 'react';
import './VoiceDetection.scss'

function VoiceDetection() {

  const [heard, setHeard] = useState(null)

  // useEffect(() => {
  //   return
  // })


  // more documentation available at
  // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands
  // the link to your model provided by Teachable Machine export panel
  const URL = "http://localhost:3002/model/";
  async function createModel() {
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata
    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL);
    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();
    return recognizer;
  }
  async function init() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    // const labelContainer = document.getElementById("label-container");
    // for (let i = 0; i < classLabels.length; i++) {
    //   labelContainer.appendChild(document.createElement("div"));
    // }
    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    recognizer.listen(result => {
      const scores = result.scores; // probability of prediction for each class

      // render the probability scores per class
      const allPredictions = []
      for (let i = 0; i < classLabels.length; i++) {
        // const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
        const classPrediction = { word: classLabels[i], probability: Number(result.scores[i].toFixed(2)) };
        allPredictions.push(classPrediction);
      }

      allPredictions.sort((a, b) => b.probability - a.probability)
      setHeard(allPredictions)
    }, {
      includeSpectrogram: true, // in case listen should return result.spectrogram
      probabilityThreshold: 0.75,
      invokeCallbackOnNoiseAndUnknown: true,
      overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
    });
    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
  }
  // if(heard){
  //   switch(heard[0]) {
  //     case 'Next':
  //     <h1>I HEARD Nexxxxtttt</h1>
  //     break
  //     case 'Start':
  //     <h1>I HEARD Start</h1>
  //     break
  //     case 'Stop':
  //     <h1>I HEARD Stop</h1>
  //     break
  //   }
  // }

  function myFunction1() {
    alert("I AM PREVIOUS!");
  }
  function myFunction2() {
    alert("I AM NEXT!");
  }
  return (
    <div className="seq-nav">
      <div className='seq-nav-buttons'>
        <button onClick={myFunction1} type="button" className="btn btn-primary">PREVIOUS</button>
        <button onClick={init} type="button" className="btn btn-primary">START</button>
        <button onClick={myFunction2} type="button" className="btn btn-primary">NEXT</button>
      </div>

      {(heard && heard[0].word) === "Next" && <h1>I HEARD Nexxxxtttt</h1>}
      {(heard && heard[0].word) === "Start" && <h1>I HEARD Start</h1>}
      {(heard && heard[0].word) === "Stop" && <h1>I HEARD Stop</h1>}

    </div>
  );
}
export default VoiceDetection;
