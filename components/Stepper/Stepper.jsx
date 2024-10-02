import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import './StepperStyles.css';  // Import external CSS

// Steps array
const steps = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2-'];

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

// Colorlib Connector and Icon
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg, rgb(33,150,243) 0%, rgb(3,169,244) 50%, rgb(0,188,212) 100%)',  // Blue gradient for active
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg, rgb(33,150,243) 0%, rgb(3,169,244) 50%, rgb(0,188,212) 100%)',  // Blue gradient for completed
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',  // Gray for inactive
      borderRadius: 1,
    },
  }));

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#ccc',
  zIndex: 10,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',  // Add pointer on hover
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(33,150,243) 0%, rgb(3,169,244) 50%, rgb(0,188,212) 100%)',  // Blue gradient for active
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundImage:
          'linear-gradient( 136deg, rgb(33,150,243) 0%, rgb(3,169,244) 50%, rgb(0,188,212) 100%)',  // Blue gradient for completed
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <GavelIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

export default function CustomizedSteppers() {
  const [activeStep, setActiveStep] = React.useState(null); // Start with no active step
  const [visibleSteps, setVisibleSteps] = React.useState([0, 1, 2]); // Initially show the first 3 steps
  const [completedSteps, setCompletedSteps] = React.useState(new Set()); // Store completed steps
  
  const handleStepClick = (index) => {
    if (index === visibleSteps[0] && index > 0) {
      // Shift left if the clicked node is the leftmost node
      handleLeftShift(index);
    } else if (index === visibleSteps[visibleSteps.length - 1] && index < steps.length - 1) {
      // Shift right if the clicked node is the rightmost node
      handleRightShift(index);
    } else {
      // Set the active step only if it is not the rightmost or leftmost node
      setActiveStep(index);
      setCompletedSteps(prev => new Set(prev).add(index)); // Mark step as completed
    }
  };

  const handleRightShift = (clickedIndex) => {
    const lastVisibleStep = visibleSteps[visibleSteps.length - 1];
    if (lastVisibleStep < steps.length - 1) {
      // Shift by 3 steps or show remaining steps
      let newVisibleSteps = [clickedIndex, clickedIndex + 1, clickedIndex + 2].filter(step => step < steps.length);

      // If the last step is clicked (e.g., 2015), show the last 3 steps
      if (newVisibleSteps.length < 3) {
        newVisibleSteps = [steps.length - 3, steps.length - 2, steps.length - 1];
      }

      setVisibleSteps(newVisibleSteps);
      setActiveStep(clickedIndex); // Set only the clicked step as active
      setCompletedSteps(prev => new Set(prev).add(clickedIndex)); // Mark step as completed
    }
  };

  const handleLeftShift = (clickedIndex) => {
    const firstVisibleStep = visibleSteps[0];
    if (firstVisibleStep > 0) {
      // Shift left by 3 steps
      let newVisibleSteps = [clickedIndex - 2, clickedIndex - 1, clickedIndex].filter(step => step >= 0);

      // Ensure there are no negative steps and pad the start
      if (newVisibleSteps.length < 3) {
        newVisibleSteps = [0, 1, 2];
      }

      setVisibleSteps(newVisibleSteps);
      setActiveStep(clickedIndex); // Set only the clicked step as active
      setCompletedSteps(prev => new Set(prev).add(clickedIndex)); // Mark step as completed
    }
  };

  return (
    <Stack className="stepper-container" spacing={4}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {visibleSteps.map((stepIndex) => (
          <Step key={steps[stepIndex]}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              onClick={() => handleStepClick(stepIndex)}
              sx={{
                cursor: 'pointer',  // Make the label look clickable
                zIndex: 10,
                '& .MuiStepLabel-label': {
                  color: 'white',
                  fontFamily: '"Sans Source 3", sans-serif',
                  fontSize: '1rem',
                },
                '& .Mui-active .MuiStepLabel-label': {
                  color: 'white',
                },
                '& .Mui-completed .MuiStepLabel-label': {
                  color: completedSteps.has(stepIndex) ? 'white' : 'inherit', // Keep the active/completed node white
                },
              }}
            >
              {steps[stepIndex]}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep !== null && activeStep < steps.length && (
        <Box className="context-text">
          {stepDescriptions[activeStep].map((description, index) => (
            <p key={index} className="step-description">
              {description}
            </p>
          ))}
        </Box>
      )}
    </Stack>
  );
}
