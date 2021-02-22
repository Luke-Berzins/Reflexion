import '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import React, { useState, createContext, useEffect, useContext } from "react";

const ModelContext = createContext();

const URL = "http://localhost:8000/model/";

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
export function useModel() {
  return useContext(ModelContext)
}


function ModelProvider({children, loading}) {
  const [model, setModel] = useState(null);

  useEffect(() => {
    createModel().then(setModel)
  }, []);

  return (
    <ModelContext.Provider value={model}>
      { model ? children : loading }
    </ModelContext.Provider>
  );
}

export default ModelProvider;
