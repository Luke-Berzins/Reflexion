import '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import { useEffect, useState } from 'react';
import './VoiceDetection.scss'
import { useModel } from '../context/model'


function VoiceDetection(props) {
  const recognizer = useModel()

  const { poseIncrementer, startSequence, started } = props;

  useEffect(() => {
    console.log("initializing detection")
    
        recognizer.listen(result => {
          // console.log(result)
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

        

       if (match === 'begin' && startSequence) {
          startSequence();
        }

        if (match === 'next' && poseIncrementer) {
          poseIncrementer(1)
        }

        if (match === 'previous' && poseIncrementer) {
          poseIncrementer(-1)
        }
        // if (match === 'quit' && poseIncrementer) {
        //   window.location = `/yoursessions`;
        // }



        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.85,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.60 // probably want between 0.5 and 0.75. More info in README
        });


      return () => {
        if (recognizer) {
          recognizer.stopListening()
        }
      };

    }, [poseIncrementer, startSequence, recognizer])

  return (
    <div className="seq-nav">
      <div className='seq-nav-buttons'>
        {started ? <button onClick={() => props.poseIncrementer(-1)} type="button" className="btn btn-secondary pre">Previous</button> : null}
        {started ? <button onClick={() => window.location = `/yoursessions`} type="button" className="btn btn-secondary stop">Quit</button>
        : <button onClick={() => props.startSequence()} type="button" className="btn btn-secondary start">Begin</button> }
        {started ? <button onClick={() => props.poseIncrementer(1)} type="button" className="btn btn-secondary next">Next</button> : null}
        <h1><b>{props.current}</b></h1>
      </div>
    </div>
  )


}
export default VoiceDetection;
