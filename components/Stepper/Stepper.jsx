import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { UserIcon, CogIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";

// Data arrays
const steps = [
  '2006', '2007', '2008', '2009', '2010', '2011', 
  '2012', '2013', '2014', '2015', '2016', '2017', 
  '2018', '2019', '2020'
];

const stepDescriptions = [
  ["Scott L. Lowe joined the firm.", "The firm moved the office to Main Street in Fairfax City.", "Martin R. Geissler and Mark E. Olds founded the firm."],
  ["Daniel Podhajny joined the firm.", "Number of employees: 6"],
  ["Joe M. ('Ken') Muncy joined the firm.", "The firm moved the office to 4000 Legato Road in Fairfax County.", "Number of employees: 16"],
  ["Number of employees: 23"],
  ["John L. Ciccozzi joined the firm.", "Number of employees: 25"],
  ["Number of employees: 29"],
  ["Number of employees: 34"],
  ["Daniel Podhajny as Principal partner.", "Number of employees: 43"],
  ["Number of employees: 51"],
  ["Number of employees: 58"],
  ["Number of employees: 58"],
];

export default function StepperWithContent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [visibleSteps, setVisibleSteps] = React.useState([0, 1, 2]); // Initially show the first 3 steps

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      const nextStep = activeStep + 1;
      setActiveStep(nextStep);
      shiftStepsRight(nextStep);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      const prevStep = activeStep - 1;
      setActiveStep(prevStep);
      shiftStepsLeft(prevStep);
    }
  };

  // Shift visible steps to the right
  const shiftStepsRight = (nextStep) => {
    if (nextStep > visibleSteps[visibleSteps.length - 1] && nextStep < steps.length) {
      setVisibleSteps([nextStep - 2, nextStep - 1, nextStep]);
    }
  };

  // Shift visible steps to the left
  const shiftStepsLeft = (prevStep) => {
    if (prevStep < visibleSteps[0] && prevStep >= 0) {
      setVisibleSteps([prevStep, prevStep + 1, prevStep + 2]);
    }
  };

  return (
    <div className="w-10/12  py-4 ml-44">
      {/* Custom Stepper Wrapper for animated progress bar */}
      <div className="relative w-full">
        {/* Base gray progress bar */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 transform -translate-y-1/2" />
        {/* Blue animated progress bar */}
        <div
          className="absolute top-1/2 left-0 h-[2px] bg-blue-600 transform -translate-y-1/2 transition-all duration-300"
          style={{
            // Calculate the width based on active step within the visible steps
            width: `${((activeStep - visibleSteps[0]) / (visibleSteps.length - 1)) * 100}%`,
            // Set the max width relative to total step count
            maxWidth: `${((visibleSteps[visibleSteps.length - 1] + 1) / steps.length) * 100}%`,
          }}
        />
        <Stepper activeStep={activeStep}>
          {visibleSteps.map((stepIndex) => (
            <Step key={steps[stepIndex]} onClick={() => setActiveStep(stepIndex)}>
              {/* Icon based on step */}
              {stepIndex % 3 === 0 ? (
                <UserIcon className="h-5 w-5" />
              ) : stepIndex % 3 === 1 ? (
                <CogIcon className="h-5 w-5" />
              ) : (
                <BuildingLibraryIcon className="h-5 w-5" />
              )}
              {/* Step label */}
              <div className="absolute -bottom-[4.5rem] w-max text-center">
                <Typography
                  variant="h6"
                  color={activeStep === stepIndex ? "blue-gray" : "gray"}
                >
                  {steps[stepIndex]}
                </Typography>
              </div>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Display step descriptions for the active step */}
      {activeStep < stepDescriptions.length && (
        <div className="mt-24 text-center">
          <Typography variant="h5" className="text-blue-gray-800 mb-4">
            {`Details for ${steps[activeStep]}`}
          </Typography>
          {stepDescriptions[activeStep].map((desc, idx) => (
            <Typography key={idx} className="text-gray-600 mb-2">
              {desc}
            </Typography>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <Button onClick={handlePrev} disabled={activeStep === 0}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
