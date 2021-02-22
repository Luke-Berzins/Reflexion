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

  const { poseIncrementer, startSequence } = props;

  useEffect(() => {
    // console.log('Use effect is running');
    let recognizer;

      createModel().then((model) => {
        // console.log('Create model is running');
        recognizer = model;

        recognizer.listen(result => {
        // console.log('Recognizer is running', result);

        const scores = result.scores; // probability of prediction for each class

        const classLabels = recognizer.wordLabels();
        const allPredictions = []

        for (let i = 0; i < classLabels.length; i++) {
          // const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
          const classPrediction = { word: classLabels[i], probability: Number(result.scores[i].toFixed(2)) };
          allPredictions.push(classPrediction);
        }

        allPredictions.sort((a, b) => b.probability - a.probability)
        const match = allPredictions[0].word.toLowerCase();
        // console.log('The predictions array:', allPredictions)
        // console.log('Match is:', match)

        if (match === 'next' && poseIncrementer) {

          // allPredictions.splice(0, 1, 'pause')
          poseIncrementer(1)

        }
        if (match === 'begin' && startSequence) {

          startSequence();
        }
        if (match === 'previous' && poseIncrementer) {

          poseIncrementer(-1)
        }

        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.90,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });
      });

      return () => {
        try {
          if (recognizer) {
            recognizer.stopListening()
          }
        } catch(err) {
          console.error('Could not clean up recognizer, recognizer was not active.', err)
        }
      };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startSequence, poseIncrementer])

  return (
    <div className="seq-nav">
      <div className='seq-nav-buttons'>
        {props.button ? <button onClick={() => props.poseIncrementer(-1)} type="button" className="btn btn-secondary pre">Previous</button> : null}
        {props.button ? <button onClick={() => window.location = `/yoursessions`} type="button" className="btn btn-secondary stop">Quit</button>
        : <button onClick={() => props.startSequence()} type="button" className="btn btn-secondary start">Begin</button> }
        {props.button ? <button onClick={() => props.poseIncrementer(1)} type="button" className="btn btn-secondary next">Next</button> : null}
      </div>
    </div>
  )


}
export default VoiceDetection;
