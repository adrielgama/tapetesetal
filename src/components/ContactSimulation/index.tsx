/* eslint-disable react/destructuring-assignment */
import { useState } from "react";
import ContactSimulation from "./ContactSimulation";
import SimulationResult from "./SimulationResult";

export interface IWizard {
  setWizard: (value: 1 | 2) => void;
  wizardValue: number;
}

const InputSearchLocation = (Props: IWizard) => {
  const [actualPage, setActualPage] = useState(1);

  return (
    <div className="App">
      {actualPage === 1 && (
        <ContactSimulation setWizard={setActualPage} wizardValue={actualPage} />
      )}
      {actualPage === 2 && (
        <SimulationResult setWizard={setActualPage} wizardValue={actualPage} />
      )}
    </div>
  );
};

export default InputSearchLocation;
