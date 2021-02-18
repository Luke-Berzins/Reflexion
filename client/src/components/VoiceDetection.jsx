import '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import { useEffect, useState } from 'react';
import './VoiceDetection.scss'


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

function VoiceDetection(props) {

    useEffect(() => {

      let recognizer;

      createModel().then((model) => {

        recognizer = model;

        recognizer.listen(result => {
          // console.log(result)

        const scores = result.scores; // probability of prediction for each class
                // render the probability scores per class

        const classLabels = recognizer.wordLabels();
        const allPredictions = []

        for (let i = 0; i < classLabels.length; i++) {
          // const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
          const classPrediction = { word: classLabels[i], probability: Number(result.scores[i].toFixed(2)) };
          allPredictions.push(classPrediction);
        }

        allPredictions.sort((a, b) => b.probability - a.probability)
        // console.log(allPredictions);
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);



      });

      return () => {
        if (recognizer) {
          recognizer.stopListening()
        }
      };

    }, [])

  return (
    <div className="seq-nav">
      <div className='seq-nav-buttons'>
        <button onClick={() => props.poseIncrementer(200)} type="button" className="btn btn-primary">PREVIOUS</button>
        <button onClick={() => props.startSequence()} type="button" className="btn btn-primary">START</button>
        <button onClick={() => props.poseIncrementer(100)} type="button" className="btn btn-primary">NEXT</button>
      </div>


      {/* {(heard && heard[0].word) === "Next" && <h1>I HEARD Next</h1>}
      {(heard && heard[0].word) === "Begin" && <h1>I HEARD Begin</h1>}
      {(heard && heard[0].word) === "Stop" && <h1>I HEARD Stop</h1>}voiceNavigationvoiceNavigation
      {(heard && heard[0].word) === "Previous" && <h1>I HEARD previous</h1>}
      {(heard && heard[0].word) === "Go Back" && <h1>I HEARD Go Back</h1>}
       */}

    </div>
  );
}
export default VoiceDetection;
